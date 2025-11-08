/*
8x8 grid new line charactesr to separate lines
each char is a space or a #
create a string using the size input then after every input size characters add a new line?
*/

const boardSize = 10;
let chessBoard = "";
let firstTile = "O";
let secondTile = "X";

for (let i = 1; i <= (boardSize**2); i++) {

    if (i % 2 !== 0) {
        chessBoard += firstTile;
    } else  {
       chessBoard += secondTile;
    }

    if (i % boardSize === 0) {
        chessBoard += "\n"
        let temp = firstTile
        firstTile = secondTile;
        secondTile = temp;
    }
}

console.log(chessBoard);
