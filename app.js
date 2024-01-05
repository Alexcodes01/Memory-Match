
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card")
  const flipsDisplay = document.getElementById("flips")
  const timeDisplay = document.getElementById("time-remaining")
  const winMessage = document.getElementById("Win")
  const loseMessage = document.getElementById("Lose")
  const restartButton = document.getElementById("restartButton")

  let totalFlips = 0
  let isFlipped = false
  let firstCard, secondCard
  let lockBoard = false
  let matches = 0
  let timeRemaining = 99 // Timer

  // Fisher-Yates shuffle method before game starts
  function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      cards[j].style.order = i;
      cards[i].style.order = j;
    }
  }

  shuffleCards()

  // Function to start the game
  function startGame() {
    cards.forEach(card => card.addEventListener("click", flipCard))
    startTimer()
  }


  // Function to flip the card
  function flipCard() {
    if (lockBoard) return
    if (this === firstCard) return

    this.classList.toggle("flip")
    if (!isFlipped) {
      // First card flipped
      isFlipped = true
      firstCard = this
    } else {
      // Second card flipped
      totalFlips++
      flipsDisplay.textContent = totalFlips
      isFlipped = false
      secondCard = this

      checkForMatch()
    }
  }

  // Function to check for card match
  function checkForMatch() {
    const firstvalue=firstCard.getAttribute("data-value")
    const secondvalue=secondCard.getAttribute("data-value")
    if (firstvalue === secondvalue) {
      disableCards()
      matches++
      if (matches === cards.length / 2) {
        // All matches found
        handleWin()
      }
    } else {
      unflipCards()
    }
  }

  // Function to disable matched cards
  function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetBoard()
  }

  // Function to unflip cards if not matched
  function unflipCards() {
    lockBoard = true

    setTimeout(() => {
      firstCard.classList.remove("flip")
      secondCard.classList.remove("flip")
      resetBoard()
    }, 1000)
  }

  // Function to reset board after checking for match
  function resetBoard() {
    [isFlipped, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
  }

  // Function to handle win condition
  function handleWin() {
    winMessage.textContent = "Congratulations! You've Matched Them All!"
    clearInterval(timerInterval) // Stop the timer
  }

  // Timer functionality
  let timerInterval
  function startTimer() {
    timerInterval = setInterval(() => {
      timeDisplay.textContent = timeRemaining;
      timeRemaining--
      if (timeRemaining < 0) {
        clearInterval(timerInterval)
        loseMessage.textContent = "Time's up! Game over."
        lockBoard = true
      }
    }, 1000)
  }

  // Restart button functionality
  restartButton.addEventListener("click", () => {
    location.reload() // Refresh the page to restart the game
  })
  cards.forEach(card => card.addEventListener("click", flipCard))
  startGame()
})
