// constants
const total cards = [16]
const cardContainer = document.querySelector('.card-container')
const card images = [ ]

// Card grid
for (let i = 0; i < totalCards; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.setAttribute('data-index', i)
  cardContainer.appendChild(card)
}
const imageUrls = [
  'image1.jpg', 'image1.jpg', // Pair 1
  'image2.jpg', 'image2.jpg', // Pair 2
  'image1.jpg', 'image1.jpg', // Pair 3
  'image2.jpg', 'image2.jpg', // Pair 4
  'image1.jpg', 'image1.jpg', // Pair 5
  'image2.jpg', 'image2.jpg', // Pair 6
  'image1.jpg', 'image1.jpg', // Pair 7
  'image2.jpg', 'image2.jpg', // Pair 8
  
]

// Shuffle the image 
shuffleArray(imageUrls);

const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  const imageUrl = imageUrls[index];
  card.style.backgroundImage = `url(${imageUrl})`;
})


// variables (state)
let flippedCards = []
let matchedCards = []
let timer = 0
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
  const shuffledCards = shuffleArray(shuffledImages)
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
function handleCardClick (event) {
  const clickedCard = event.target
  if (!clickedCard.classList.contains(`card`) flippedCards.length === 2 || clickedCard === flippedCards[0]) {
  return
}
flipCard(clickedCard)
flippedCards.push(clickedCard)
if (flippedCards.length === 2) { 
  setTimeout(checkForMatch, 1000)}
//checking for match------------------------
function checkForMatch(){
  const [firstCard, secondCard] = flippedCards
  if (firstCard.style.backgroundImage === secondCard.style.backgroundImage) {
    handleMatch()
  } else {
    setTimeout(()=> {
      flipCard(firstCard)
      flipCard(secondCard)
      flippedCards = []
    },1000)
    }
  
  }
  //logic for win condtiions
}
function handleMatch()
matchedCards.push(...flippedCards)
flippedCards = []

if (matchedCards.length ===totalcards){
  handleWin()
}

function handleWin(){
const winMessage = document.getElementById(`winMessage`)
winMessage.style.display = `block`
stopTimer()
setTimeout(resetGame, 8000)
}

//reset game function
function resetGame() {
const winMessage = document.getElementById(`winMessage`)
winMessage.style.display = `none`
const cards = document.querySelectorAll(`.card`)
cards.forEach(card =>{
  card.classList.remove(`flipped`)
})
stopTimer()
timeElapsed = 0
timerDisplay.textContent = formatTime(timeElapsed)

matchedCards = []
flippedCards = []
intializeGame()

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


// testing
const card1 = document.querySelector('#card1')
handleCardClick({ target: card1 })
