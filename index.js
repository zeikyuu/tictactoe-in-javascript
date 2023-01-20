// Game board and status variables
var board = ["", "", "", "", "", "", "", "", ""];
var player = "X";
var gameOver = false;

// Function to update the game board and check for a win or draw
function play(position) {
    // Update the board
    board[position] = player;
    var cell = document.getElementById("cell-" + position);
    cell.classList.add(player);
    // Check for a win
    checkWin();

    // Check for a draw
    checkDraw();

    // Switch player
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
}


// Function to check for a win
function checkWin() {
    // Winning combinations
    var combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    // Check each combination
    for (var i = 0; i < combinations.length; i++) {
        if (board[combinations[i][0]] === player && board[combinations[i][1]] === player && board[combinations[i][2]] === player) {
            alert(player + " wins!");
            gameOver = true;
            break;
        }
    }
}

// Function to check for a draw
function checkDraw() {
    if (!gameOver && board.indexOf("") === -1) {
        alert("It's a draw!");
        gameOver = true;
    }
}


// Create a reset button
var resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
resetButton.id = "reset";
resetButton.onclick = reset;
document.body.appendChild(resetButton);

// Function to reset the game
function reset() {
    board = ["", "", "", "", "", "", "", "", ""];
    player = "X";
    gameOver = false;
    for (var i = 0; i < 9; i++) {
        var cell = document.getElementById("cell-" + i);
        cell.classList.remove("X");
        cell.classList.remove("O");
    }
}
