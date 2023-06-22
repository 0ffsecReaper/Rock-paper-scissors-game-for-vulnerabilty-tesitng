const gameState = {
    wins: 0,
    losses: 0,
    draws: 0,
    player: ""
};

const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function getComputerChoice() {
    const choices = Object.keys(beats);
    const choiceIdx = Math.floor(Math.random() * choices.length);
    return choices[choiceIdx];
}

function updateScore() {
    const counters = ["wins", "losses", "draws"];
    for (let c of counters) {
        let counter = document.getElementById(c);
        counter.innerHTML = gameState[c];
    }
}

function logGame(result, playerChoice, computerChoice) {
    const gameLog = document.getElementById("game-log");
    const newLog = `${result}: ${gameState.player} chose ${playerChoice}, Computer chose ${computerChoice}`;
    gameLog.innerHTML += `<p>${newLog}</p>`;
}

function play(playerChoice) {
    // Declare result
    let result;

    // Get computer choice
    const computerChoice = getComputerChoice();

    // Declare outcome
    if (beats[playerChoice] === computerChoice) {
        gameState.wins++;
        result = "Win";
    } else if (beats[computerChoice] === playerChoice) {
        gameState.losses++;
        result = "Loss";
    } else {
        gameState.draws++;
        result = "Draw";
    }
    updateScore();
    logGame(result, playerChoice, computerChoice);
}

function initializeGame() {
    // Player name
    gameState.player = prompt("Player name");
    const nameDiv = document.getElementById("player-name");
    nameDiv.innerHTML = gameState.player;
    // Set choices handler
    const choiceButton = document.querySelectorAll(".choice-button");
    choiceButton.forEach(b => {
        b.addEventListener("click", e => {
            const playerChoice = e.target.id.replace("choice-", "");
            play(playerChoice);
        });
    });

    // Initializing scores
    updateScore();
}

window.onload = () => {
    initializeGame();
};
