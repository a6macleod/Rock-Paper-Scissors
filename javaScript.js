	let playerScore = 0;
	let computerScore = 0;
	let tieGame = 0;
	let computerSelection;
	let playerSelection;

document.querySelector('#Rock').onclick = user;
document.querySelector('#Paper').onclick = user;
document.querySelector('#Scissors').onclick = user;

function user() {
	playerSelection = this.id;
	computerPlay();
	playRound(playerSelection, computerSelection);
}

function computerPlay () {
	let computerMath = (Math.random());
	if (computerMath <= 0.34) {
		computerMath = "Rock";
	} else if (computerMath <= 0.67){
		computerMath = "Paper";
	} else {
		computerMath = "Scissors";
	}
	computerSelection = computerMath;
}

function playRound (playerSelection, computerSelection) {
	document.querySelector("#gameDisplay").textContent = 'You chose ' + playerSelection + 
		' and the computer chose ' + computerSelection + '. ' 
		+ playComparison(playerSelection, computerSelection);
	displayPlay();
	endGame(playerScore, computerScore, tieGame);	
}

function playComparison (playerSelection, computerSelection) {
	if(playerSelection === computerSelection) {
		tieGame ++ ;
		document.querySelector("#tie-score").textContent = tieGame;
		return ("Its a tie!");
	} else if(playerSelection === "Rock" && computerSelection === "Paper") {
		computerScore ++;
		document.querySelector("#computer-win").textContent = computerScore;
		return ("Paper Beats Rock you lose!");	
	} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
		playerScore ++;
		document.querySelector("#user-win").textContent = playerScore;
		return ("Rock Beats Scissors, you WIN!");			
	} else if (playerSelection === "Paper" && computerSelection === "Rock") {
		playerScore ++;
		document.querySelector("#user-win").textContent = playerScore;
		return ("Paper Beats Rock, you WIN!");			
	} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
		computerScore ++;
		document.querySelector("#computer-win").textContent = computerScore;
		return ("Scissors Beats Paper, you lose!");
	} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
	  	computerScore ++;
	  	document.querySelector("#computer-win").textContent = computerScore;
	  	return ("Rock beats Scissors, you lose!");			  	
  	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
	  	playerScore ++;
	  	document.querySelector("#user-win").textContent = playerScore;
	  	return ("Scissors beat paper, you WIN!");
  	}
}				
			
function endGame (playerScore, computerScore, tieGame) {
	if (playerScore === 5 || computerScore === 5 || tieGame === 5) {
		if (playerScore == 5) {
			document.querySelector("#winnerMessage").textContent = "GAME OVER, YOU WIN!!!";
		} else if (computerScore == 5) {
			document.querySelector("#winnerMessage").textContent = "GAME OVER, YOU LOSE!!!";
		} else if (tieGame == 5) {
			document.querySelector("#winnerMessage").textContent = "GAME OVER, IT IS A TIE!!!";
		}
	let reset = document.querySelector(".resetButton");
	reset.classList.toggle("resetActive");
	reset.classList.toggle("resetButton");
	}
}

function displayPlay () {
	document.querySelector("#playerChoice").innerHTML = playerSelection;
	document.querySelector("#computerChoice").textContent = computerSelection;
}

let reset = document.querySelector(".resetButton");
reset.addEventListener("click", function () {
	reset.classList.add("resetButton")
	reset.classList.remove("resetActive");
	document.querySelector("#winnerMessage").textContent = "";
	document.querySelector("#gameDisplay").textContent = "Let's Play Rock, Paper, Scissors!";
	playerScore = 0;
	computerScore = 0;
	tieGame = 0;
	document.querySelector("#user-win").textContent = playerScore;
	document.querySelector("#computer-win").textContent = computerScore;
	document.querySelector("#tie-score").textContent = tieGame;
	document.querySelector("#playerChoice").innerHTML = ""
	document.querySelector("#computerChoice").textContent = "";
		
});








