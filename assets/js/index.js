import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
// console.log(board.grid);

// Your code here

window.addEventListener('DOMContentLoaded', () => {
    //add reset button
    const button = document.createElement('button');
    button.innerText = 'Reset Game';
    document.body.appendChild(button);


    //setup game space
    const boardGame = document.createElement('div');
    boardGame.setAttribute('class', 'boardgame');


    //create and program squares
    board.grid.forEach((line, row) => {
        const newRow = document.createElement('div');
        newRow.setAttribute('class','row')

        line.forEach((value, col) => {
            // create squares
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('data-row', row);
            square.setAttribute('data-col', col);
            newRow.appendChild(square);

            //program squares
            square.addEventListener('click', () => {
                if (board.isGameOver() === false) {
                    const hit = board.makeHit(row, col);

                    if (hit === null) {
                        square.style.backgroundColor = 'red';
                    } else if (hit !== null) {
                        square.style.backgroundColor = 'green';
                        square.innerText = hit;
                    }
                }

                // end of game message
                if (board.isGameOver() && document.querySelector('.message') === null) {
                    // add message on top
                    const message = document.createElement('p');
                    message.setAttribute('class', 'message')
                    message.innerText = 'YOU WIN!';
                    boardGame.before(message);
                }
            })
        })

        boardGame.appendChild(newRow);
    })
    document.body.appendChild(boardGame);


    // program button and reset board visuals
    button.addEventListener('click', () => {
        board.populateGrid();

        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.innerText = '';
            square.style.backgroundColor = 'inherit';
        })
    })

})
