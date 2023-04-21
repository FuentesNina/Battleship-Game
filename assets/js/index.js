import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here



window.addEventListener('DOMContentLoaded', () => {
    const boardGame = document.createElement('div');
    boardGame.setAttribute('class', 'boardgame');

    board.grid.forEach((line, row) => {
        const newRow = document.createElement('div');
        newRow.setAttribute('class','row')

        line.forEach((value, col) => {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('data-row', row);
            square.setAttribute('data-col', col);
            newRow.appendChild(square);

            square.addEventListener('click', () => {
                if (board.isGameOver() === false) {
                    const hit = board.makeHit(row, col);

                    if (hit === null) {
                        square.style.backgroundColor = 'red';
                    } else if (hit !== null) {
                        square.style.backgroundColor = 'green';
                        square.innerText = hit;
                    }
                } else {
                    // add message on top
                    const message = document.createElement('p');
                    message.innerText = 'YOU WIN!';
                    boardGame.before(message);
                }
            })
        })

        boardGame.appendChild(newRow);
    })

    document.body.appendChild(boardGame);


})
