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

    const updatePlayerName = (player, newName) => {
        // return (players[player]).name = newName; 
        return (players[player])["name"] = newName; 
    }

    let activePlayer = players[0];  // player object

    const switchTurns = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]; 
        // return `It's ${activePlayer.name}'s turn.`; 
    }

    const getWhoseTurn = () => {
        return activePlayer; // player object
    }

    const restartGame = () => {
        // reset all the spots on the gameboard to 0
        board.getBoard().forEach(spotObj => {
            spotObj.changeValue(0); 
        }); 

        // set active player to player 1
        activePlayer = players[0]; 
        console.log(`Game reset.`); 
        board.logBoard(); 

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
            // console.log('Checking for win'); 
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
        // let boardValues = board.getBoard().map(spot => spot.getValue());
        const gameOverEvent = new CustomEvent('gameOver'); 
        const playerOneWins = new CustomEvent('player1'); 
        const playerTwoWins = new CustomEvent('player2'); 
        const tieGame = new CustomEvent('tie'); 
         setTimeout(() => { // delay for the last move to render to the gameBoard
            if (result === 1 || result === 2 || result === 3) { // only fires if there is a winner or a tie

                // prompt the user to play again
                let replay = null; 
                replay = `${result === 1 ? players[0].name + ' wins!': result === 2 ? players[1].name + ' wins!' : "It's a tie game. "}`; // dialog
                
                if (replay) {
                    if (result === 1 ) {
                        document.dispatchEvent(playerOneWins); 
                        // document.dispatchEvent(playerOneWins); 
                    } else if (result === 2) {
                        document.dispatchEvent(playerTwoWins); 
                    } else if (result === 3) {
                        document.dispatchEvent(tieGame); 
                    }
                    document.dispatchEvent(gameOverEvent); 
                    // console.log('New Game'); 
                    // console.log(`It is ${getWhoseTurn().name}'s turn.`); 
                } else {
                    document.dispatchEvent(gameOverEvent, result); 
                    console.log(`GAME OVER`); 
                }
            } 
        }, 100); 

        } 

    return {
        checkForWin, getWhoseTurn, getBoard, switchTurns, playRound, checkForTie, gameOver, restartGame, updatePlayerName
    }
}

(function DOMControl() { // render x and o when a player selects a spot
    const DOMElements = {
        gameboard: document.querySelector('.gameboard'), 
        allSpotDivs: Array.from(document.querySelectorAll('.spot')), 
        restart: document.querySelector('#restart'), 
        playerOneName: document.querySelector('#player-one'), // input
        playerTwoName: document.querySelector('#player-two'), 
        display: document.querySelector('#turn'), // innerHTML
        dialog: document.querySelector('#dialog'), 
        dialogParagraph: document.querySelector('.dialog'),
        replay: document.querySelector('#replay'), 
        quit: document.querySelector('#quit')
    }; 
    
    const game = GameControl(DOMElements.playerOneName.value, DOMElements.playerTwoName.value); 
    
    DOMElements.playerOneName.addEventListener('change', (e) => { // update player one name
        game.updatePlayerName(0, e.target.value); 
        DOMElements.playerOneName.value = e.target.value;
        console.log(`P1 Name: ${DOMElements.playerOneName.value}`);  
        updateDOM(); 
    }); 
    DOMElements.playerTwoName.addEventListener('change', (e) => { // update player one name
        game.updatePlayerName(1, e.target.value); 
        DOMElements.playerTwoName.value = e.target.value;
        console.log(`P1 Name: ${DOMElements.playerTwoName.value}`); 
        updateDOM(); 
    }); 
    
    const updateDOM = () => {
        let boardValues = game.getBoard().map(spot => spot.getValue());
        // game.logBoard()
        // console.log(DOMElements.allSpotDivs); 
        // for each spot - get id
        DOMElements.allSpotDivs.forEach(div => {
            let id = div.dataset.id; 

        // check spot with corresponding id
            let spotValue = boardValues[id]; 
            // div.innerHTML = spotValue === 1 ? `X` : spotValue === 2 ? `O` : ``; 
            // translates the value of the cell to the DOM
            if (spotValue === 1) {
                div.innerHTML = `X`; // X
            } else if (spotValue === 2) {
                div.innerHTML = `O`; // O
            } else {
                div.innerHTML = ``; 
            }
            // console.log(boardValues); 
        }); 

            let turn = game.getWhoseTurn().name; 
            DOMElements.display.innerHTML = `It's ${turn}'s turn!`; 
    }

    DOMElements.gameboard.addEventListener('click', (e) => {
        // console.log(e.target); 
        game.playRound(parseInt(e.target.dataset.id)); // returns gameOver based on return value]
        updateDOM(); 
    }); 

    document.addEventListener('gameOver', (e) => {
        // DOMElements.display.innerHTML = `${game.switchTurns(), game.getWhoseTurn().name} wins!`; 
        DOMElements.dialog.showModal(); 
        DOMElements.dialog.style.display = 'grid'; 
        // game.restartGame(); 
        game.getBoard().forEach(spotObj => {
            spotObj.changeValue(0); 
        }); 
        // game.switchTurns(); 
        updateDOM(); 
    }); 
    document.addEventListener('player1', (e) => {
        // DOMElements.display.innerHTML = `${game.switchTurns(), game.getWhoseTurn().name} wins!`; 
        DOMElements.dialogParagraph.innerHTML = `${game.getWhoseTurn().name} wins!`; 
    })
    document.addEventListener('player2', (e) => {
        // DOMElements.display.innerHTML = `${game.switchTurns(), game.getWhoseTurn().name} wins!`; 
        DOMElements.dialogParagraph.innerHTML = `${game.getWhoseTurn().name} wins!`; 
    })
    document.addEventListener('tie', (e) => {
        // DOMElements.display.innerHTML = `It's a tie!`; 
        DOMElements.dialogParagraph.innerHTML = `It's a tie!`; 
    })

    DOMElements.restart.addEventListener('click', (e) => {
        game.restartGame(); 
        DOMElements.playerOneName.value = 'Player 1';
        DOMElements.playerTwoName.value = 'Player 2';
        updateDOM(); 
    })

    DOMElements.quit.addEventListener('click', e => {
        // clear the game board
        // clear the names
        DOMElements.playerOneName.value = '';
        DOMElements.playerTwoName.value = '';
        // clear the display
        DOMElements.display.innerHTML = 'GAME OVER'; 
        DOMElements.dialog.close(); 
        DOMElements.dialog.style.display = 'none'; 
    })
    DOMElements.replay.addEventListener('click', e => {
        game.getBoard().forEach(spotObj => {
            spotObj.changeValue(0); 
        }); 
        // game.switchTurns(); 
        console.log(`Game reset.`); 
        // game.logBoard(); 
        updateDOM(); 
        DOMElements.dialog.close(); 
        DOMElements.dialog.style.display = 'none'; 
    })
})(); 