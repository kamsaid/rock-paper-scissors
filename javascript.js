let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanChoice() {
    // Get user input and handle Cancel/Escape
    let choice = prompt("Enter rock, paper, or scissors:");
    
    // If user cancels, keep prompting until they enter a valid choice or play
    while (choice === null || !["rock", "paper", "scissors"].includes(choice?.toLowerCase())) {
        choice = prompt("Please enter rock, paper, or scissors (or press OK to play):");
        // If user keeps canceling, default to rock to prevent infinite loop
        if (choice === null) {
            return "rock";
        }
    }
    
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    
    const wins = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    
    if (wins[humanChoice] === computerChoice) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        const result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();
