// I want to start this by being able to click on each cell and either give it 'X' or 'O'.
// How do i do this?
// Need an event listener for the buttons to click on, each cell should either click 'X' or 'O'.
// A reset button

console.log('Welcome to Tic-Tac-Toe! Enjoy!')

// first decalring the table by tag name. This gets all of our square in our table

// ----------- Cells ------------ //

let cells = document.getElementsByTagName('TD')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

let noughtsTurn = true

let gameIsOver

//function checkForWin()

// -------- Cell Clicked Function ------- //

// So far I have the code to click on a cell, and the first click is 'X' the next click is 'O'
//The next step is how do I update the subtitle to show whos turn it now is. If X starts and clicks then the subtitle should show 'Player O's turn or something rather.
// If not 'X' then O's turn.

// Later I don't want to be able to click on the same cell again.

function cellClicked(e) {
  let cell = e.target

  console.log('i clicked on: ' + cell)

  if (gameIsOver) {
    cell = ''
    console.log('game is over')
  }

  if (cell.innerHTML == '') {
    let symbol = noughtsTurn ? `X` : `O`
    cell.innerHTML += symbol

    noughtsTurn = !noughtsTurn

    document.getElementById('subtitle').innerHTML =
      noughtsTurn == true ? 'Player X turn' : 'Player O turn'

    checkForWin(symbol)

    // if (gameIsOver) {
    //   checkForWin(symbol)
    // }
  }
}

// -------------- Check for Win ----------- //

function checkForWin(symbol) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // VERTICAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true

  if (gameIsOver) {
    document.getElementById('subtitle').innerHTML =
      noughtsTurn == true ? 'O is the winner' : 'X is the winner'
    console.log('Game is over')
  }
}

// Creating a function that changes the subtitle 'click on a ...' to whos turn it is.
// function displayPlayersTurn()
// if X's turn display Player X turn
// if not X's: Player Noughts turn.
// it could look similar to this:
//function displayCustomerOrder() {
//   document.getElementById('customerOrder').innerHTML =
//     'Customer order: ' + customer.order
// }

// start of funtion

// function displayPlayersTurn() {
//   document.getElementById('subtitle').innerHTML =
// }
