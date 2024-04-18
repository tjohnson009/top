function Gameboard() { // state of the game board
    const board = []; 
    // const board = [0,0,0,0,0,0,0,0,0]; 

    for (let i = 0; i < 9; i++) {
        board.push(Spot()); // 9 spots for tic-tac-toe - array of spot objects
    }

    const getBoard = () => {
        return board; 
    }

    const getSpot = (spotNumber) => {
        return board[spotNumber]; 
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
                // console.log(`That spot is not open.`); 
            }
        }
    }

    const logBoard = () => { // console.log the board before UI implementation
        const boardWithValues = board.map(spot => spot.getValue()); 
        console.log(boardWithValues); 
        return boardWithValues; 
    }

    return {
        getBoard, receiveMarker, logBoard, getSpot
    }
}

function Spot() {  
    let value = 0; // 0 for empty, 1 for playerOne, 2 for playerTwo

    const changeValue = (playerMarker) => { // changing the value of a spot
        if (value !== 1 && value !== 2) {
            value = playerMarker; 
        } else {
            console.log('That spot is not open.'); 
            return 'switch turns'; 
        }
    }

    const getValue = () => {
        return value; 
    }

    return {
        changeValue, getValue
    }
}

function GameControl(playerOneName = 'Player 1', playerTwoName = "Player 2") {

    const board = Gameboard(); 
    // let nonZeroSpots = board.getBoard().filter(spot => (spot.getValue() !== 0));
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

    let activePlayer = players[0];  // player object

    const switchTurns = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]; 
        // return `It's ${activePlayer.name}'s turn.`; 
    }

    const getWhoseTurn = () => {
        return activePlayer; // player object
    }

    const restartGame = () => {

    }

    const playRound = (spotNumber) => { // spot is a number from 0 - 9
        if (board.getBoard()[spotNumber].getValue() === 0) { // forces selection to only open spots
            console.log(`${getWhoseTurn().name} chose spot ${spotNumber}.`);  // no semi colon here breaks the app
                // board.logBoard(); 
                (board.getBoard())[spotNumber].changeValue(activePlayer.marker); 
                board.receiveMarker(board[spotNumber], activePlayer); 
                board.logBoard(); 
                switchTurns(); 
                console.log(`It is ${getWhoseTurn().name}'s turn now.`); 
                return checkForWin(); 
            } else {                
                console.log('That spot is not open or invalid.'); 
                // switchTurns(); // resets the players turn to try again
                return `It is ${getWhoseTurn().name}'s turn. `; 
        }

    }

    const checkForWin = () => {
        let nonZeroSpots = board.getBoard().filter(spot => (spot.getValue() !== 0)); 
    if (!checkForTie()) {
        if (nonZeroSpots.length >= 5) { // start checking for wins once 5 spots are filled - the lowest possible number
            console.log('Checking for win'); 
        // let whoWentFirst = whoseTurn; 
        const possibleWins = [ // winning combos
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
        ]; 
            // take the spots on the board and check them against the possible wins - for loop because cannot break forEach
        for (let i = 0; i < possibleWins.length; i++) { // for every possible win
            if (possibleWins[i].every(spot => board.getBoard()[spot].getValue() === 1)) { // playerOne occupies every spot in possible win combo
                console.log('Player 1 wins'); 
                // break; 
                return 1; 
            } else if (possibleWins[i].every(spot => board.getBoard()[spot].getValue() === 2)) { // playerTwo occupies every spot in possible win combo
                console.log('Player 2 wins');
                // break; 
                return 2; 
                }
            }
            return `No winner yet`
        } else {
            return `No win check yet.`
        } 
    } else {
        return `Tie game`
    }
}

    const checkForTie = () => {
        let nonZeroSpots = board.getBoard().filter(spot => (spot.getValue() !== 0)); 
        if (nonZeroSpots.length === 9) {
            return true; 
    }
    return false; // default is no tie
}

    return {
        checkForWin, getWhoseTurn, switchTurns, playRound, checkForTie
    }
}

const game = GameControl(); 