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
            value = playerMarker; 
    }

    const getValue = () => {
        return value; 
    }

    return {
        changeValue, getValue
    }
}

function GameControl(playerOneName = 'Player 1', playerTwoName = "Player 2") {

    const board = Gameboard(); // creating and returning the gameboard
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
        // reset all the spots on the gameboard
        board.getBoard().forEach(spotObj => {
            spotObj.changeValue(0); 
        })

        // set active player to player 1
        activePlayer = players[0]; 
        console.log(`Game restarted. ${getWhoseTurn().name}'s move.`); 
    }

    const playRound = (spotNumber) => { // spot is a number from 0 - 9
        if (spotNumber <= 9 && spotNumber >= 0) {
        if (board.getBoard()[spotNumber].getValue() === 0) { // forces selection to only open spots
            console.log(`${getWhoseTurn().name} chose spot ${spotNumber}.`);  // no semi colon here breaks the app
                // board.logBoard(); 
                (board.getBoard())[spotNumber].changeValue(activePlayer.marker); 
                board.receiveMarker(board[spotNumber], activePlayer); 
                board.logBoard(); 
                switchTurns(); 
                console.log(`It is ${getWhoseTurn().name}'s turn now.`); 
                let result = checkForWin(); 
                return gameOver(result); 
                }
            } else {                
                console.log('That spot is not open or invalid.'); 
                // switchTurns(); // resets the players turn to try again
                return `It is ${getWhoseTurn().name}'s turn.`; 
        }

    }

    const checkForWin = () => {
        let nonZeroSpots = board.getBoard().filter(spot => (spot.getValue() !== 0)); 
    // if (!checkForTie()) {
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

            if (checkForTie()) {
                console.log('Tie game'); 
                return 3; 
            }

            console.log('No winner yet'); 
            return 0; 
        } 
}

    const checkForTie = () => {
        let nonZeroSpots = board.getBoard().filter(spot => (spot.getValue() !== 0)); 
        if (nonZeroSpots.length === 9) {
            return true; 
    }
    return false; // default is no tie
}

    const getBoard = () => {
        return board.getBoard();
    }

    const gameOver = (result) => {
        setTimeout(() => { // delay so the last move shows up on the DOM
            if (result === 1 || result === 2 || result === 3) {
                // prompt the user to play again
                let replay = prompt(`Play again? Click cancel if not.`); 
                if (replay) {
                    // reset the value of all the spots
                    board.getBoard().forEach(spotObj => {
                        spotObj.changeValue(0); 
                    })
                    // set whoseTurn variable to allow O to go first for the next round
                    switchTurns(); 
                } else {
                    console.log(`GAME OVER`); 
                }
            } 
        }, 1000); 
    } 

    return {
        checkForWin, getWhoseTurn, getBoard, switchTurns, playRound, checkForTie, gameOver, restartGame
    }
}

function DOMControl() { // render x and o when a player selects a spot
    const game = GameControl(); 
    const DOMElements = {
        gameboard: document.querySelector('.gameboard'), 
        allSpotDivs: Array.from(document.querySelectorAll('.spot')), 

    }; 


    const updateGameboard = () => {
        let boardValues = game.getBoard().map(spot => spot.getValue());
        console.log(boardValues); 
        // console.log(DOMElements.allSpotDivs); 
        // for each spot - get value
        DOMElements.allSpotDivs.forEach(div => {
            let id = div.dataset.id; 

        // check spot with corresponding id
            let spotValue = boardValues[id]; 
            // div.innerHTML = spotValue === 1 ? `X` : spotValue === 2 ? `O` : ``; 
            if (spotValue === 1) {
                div.innerHTML = `X`; 
            } else if (spotValue === 2) {
                div.innerHTML = `O`; 
            } else {
                div.innerHTML = ``; 
            }
            // console.log(boardValues); 
        })
    }

    DOMElements.gameboard.addEventListener('click', e => {
        console.log(e.target); 
        game.playRound(parseInt(e.target.dataset.id)); 
        updateGameboard(); 
    }); 

    updateGameboard(); 

}

DOMControl(); 