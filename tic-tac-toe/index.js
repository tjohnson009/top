function Gameboard() {
    const board = []; 
    // const board = [0,0,0,0,0,0,0,0,0]; 

    for (let i = 0; i < 9; i++) {
        board[i].push(Spot()); // 9 spots for tic-tac-toe
    }

    const getBoard = () => {
        return board; 
    }

    const receiveMarker = (spot, player) => {
        const openSpots = board.filter(spot => {
            return spot.getValue() === 0; 
        })

        if (!openSpots) {
            console.log('Game over'); 
            return; 
        } else {
            spot.addValue(player.marker); 
        }
    }

    const renderBoard = () => {

    }

    return {
        getBoard, receiveMarker, renderBoard
    }
}

function Spot() {
    let value = 0; 

    const addValue = (playerMarker) => { // changing the value of a spot in the board array
        value = playerMarker; 
    }

    const getValue = () => {
        return value; 
    }

    // const displayValue = () => {
    // }

    return {
        addValue, getValue
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

    const playRound =  (spot) => {
        spot.addValue(whoseTurn.marker); 
    }

}