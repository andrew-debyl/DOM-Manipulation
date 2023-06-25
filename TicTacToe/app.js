//query selecting ALL elements with that name (makes an array)
const squares = document.querySelectorAll(".board__square");

//getting the title so we can say who's turn it is
const title = document.querySelector(".board__title");

let currentPlayer = "X";

let gameOver = false;

//creating a board array to store the location of X's and O's on the board of length 9
let board = new Array(9);

//looping through them and adding a onClick
//uses square as that specific element and i as the index
//checking if the game is over and if the value of square.innerHTML exsists, and if it is then exiting the loop so you cant keep playing
//then this is how we add an 'onclick' inside the forEach loop with 'addEventListener'
//then we print the value of the currentPlayer (X or O)
//then we put the value (X or O) at the index clicked in the 'board' array
//then we check if 'checkWin' is true (its true when you win), and if its true were chaning the title and returning so the rest of the code in the loop doesn't run
//then doing the same thing and checking if it is a draw
//then use a ternirary operator to say if its 'X' then set to 'O' and if its not 'X' then set to 'X'
//then we say whos turn it is at the top of the game
squares.forEach((square, i) => {
  square.addEventListener("click", () => {
    if (square.innerHTML || gameOver) {
      return;
    }

    square.innerHTML = currentPlayer;

    board[i] = currentPlayer;

    if (checkWin()) {
      title.innerHTML = `${currentPlayer} Wins!`;
      gameOver = true;
      return;
    }

    if (checkDraw()) {
      title.innerHTML = `Draw!`;
      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    title.innerHTML = `${currentPlayer}'s Turn`;
  });
});

function checkWin() {
  //Making an array to store all of the winning indicies
  const winningIndicies = [
    // Horizontal Wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical Wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal Wins
    [0, 4, 8],
    [2, 4, 6],
  ];

  //looping over all the winning indicies
  for (let i = 0; i < winningIndicies.length; i++) {
    const matchingIndicies = winningIndicies[i];

    //getting the symbols for the specific winning indicie
    let symbol1 = board[matchingIndicies[0]];
    let symbol2 = board[matchingIndicies[1]];
    let symbol3 = board[matchingIndicies[2]];

    //Checking to make sure the values are not empty
    if (!symbol1 || !symbol2 || !symbol3) {
      continue;
    }

    //Checking if the values are the same (that means they won)
    if (symbol1 === symbol2 && symbol2 === symbol3) {
      return true;
    }
  }
}

//looping through the entire board and returning false if any of the 9 indicies (values) is false
//returning true if it made it through the 9 without any being false (means the boards full and game is over)
function checkDraw() {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return false;
    }
  }
  return true;
}

//setting the title correctly again
//making every square on the board empty
//making the 'board' variable empty again
//setting the 'gameOver' variable to false so we can click again
function restartGame() {
    title.innerHTML = `${currentPlayer}'s Turn`;

    squares.forEach((square) => {
        square.innerHTML = ''
    })

    board = new Array(9)

    gameOver = false
}