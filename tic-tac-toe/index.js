function Gameboard() { // state of the game board
    const board = []; 
    // const board = [0,0,0,0,0,0,0,0,0]; 

    for (let i = 0; i < 9; i++) {
        board[i].push(Spot()); // 9 spots for tic-tac-toe - array of spot objects
    }

    const getBoard = () => {
        return board; 
    }

    const receiveMarker = (spot, player) => { // checks if the move is valid
        const openSpots = board.filter(spot => {
            return spot.getValue() === 0; 
        })

        if (!openSpots) {
            console.log('Game over'); 
            return; 
        } else {
            if (openSpots.includes(spot)) {
                spot.addValue(player.marker); 
            } else {
                console.log(`That spot is not open.`); 
            }
        }
    }

    const logBoard = () => { // console.log the board before UI implementation
        const boardWithValues = board.map(spot => spot.getValue()); 
        console.log(boardWithValues); 
    }

    return {
        getBoard, receiveMarker, logBoard
    }
}

function Spot() {  
    let value = 0; // 0 for empty, 1 for playerOne, 2 for playerTwo

    const changeValue = (playerMarker) => { // changing the value of a spot
        if (value !== 1 && value !== 2) {
            value = playerMarker; 
        } else {
            console.log('That spot is not open.'); 
        }
    }

    const getValue = () => {
        return value; 
    }

    return {
        changeValue, getValue
    }
}

function GameControl(playerOneName = 'Player One', playerTwoName = "Player Two") {

    const board = Gameboard(); 
    const players = [
        {
            name: playerOneName, 
            marker: 1 
        }, 
        {
            name: playerTwoName, 
            marker: 2
        }
    ]; 

    let whoseTurn = players[0]; 

    const switchTurns = () => {
        whoseTurn = whoseTurn === players[0] ? players[1] : players[0]; 
    }

    const getWhoseTurn = () => {
        return whoseTurn; 
    }

    const restartGame = () => {

    }

    const playRound =  (spot) => { // spot is a number from 0 - 9
        board[spot].changeValue(whoseTurn.marker); 
        board.receiveMarker(board[spot], whoseTurn); 
        board.logBoard(); 
        switchTurns(); 
    }

    const checkForWin = () => {
        // start checking at 5 spots filled in the array because it's not possible to have a winner before that
        const possibleWins = []; 
    }

    return {

    }
}