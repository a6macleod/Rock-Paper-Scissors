	let playerScore = 0;
	let computerScore = 0;
	let tieGame = 0;

document.getElementById('Rock').onclick = user;
document.getElementById('Paper').onclick = user;
document.getElementById('Scissors').onclick = user;

function user() {
	let playerSelection = this.id;
//	console.log('User: ' + playerSelection)

	let computerSelection = (Math.random());
	if (computerSelection <= 0.34) {
		computerSelection = "Rock";
	} else if (computerSelection <= 0.67){
		computerSelection = "Paper";
	} else {
		computerSelection = "Scissors";
	};
//	console.log('Computer: ' + computerSelection);


	function playRound(playerSelection, computerSelection) {
		
			if(playerSelection === computerSelection) {
				tieGame ++ ;
				document.querySelector("#tie-score").textContent = tieGame;
				endGame(playerScore, computerScore, tieGame);
				return ("Its a tie!");
			} else if(playerSelection === "Rock" && computerSelection === "Paper") {
				computerScore ++;
				document.querySelector("#comuter-win").textContent = computerScore;
				endGame(playerScore, computerScore, tieGame);
				return ("Paper Beats Rock you lose!");
				
			} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
				playerScore ++;
				document.querySelector("#user-win").textContent = playerScore;
				endGame(playerScore, computerScore, tieGame);
				return ("Rock Beats Scissors, you WIN!");			
			} else if (playerSelection === "Paper" && computerSelection === "Rock") {
				playerScore ++;
				document.querySelector("#user-win").textContent = playerScore;
				endGame(playerScore, computerScore, tieGame);
				return ("Paper Beats Rock, you WIN!");			
			} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
				computerScore ++;
				document.querySelector("#comuter-win").textContent = computerScore;
				endGame(playerScore, computerScore, tieGame);
				return ("Scissors Beats Paper, you lose!");
			} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
			  	computerScore ++;
			  	document.querySelector("#comuter-win").textContent = computerScore;
			  	endGame(playerScore, computerScore, tieGame);
			  	return ("Rock beats Scissors, you lose!");			  	
		  	} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
			  	playerScore ++;
			  	document.querySelector("#user-win").textContent = playerScore;
			  	endGame(playerScore, computerScore, tieGame);
			  	return ("Scissors beat paper, you WIN!");
		  	}	
				
			
		}

	document.querySelector("#gameDisplay").textContent = 'You chose ' + playerSelection + 
		' and the computer chose ' + computerSelection + '. ' 
		+ playRound(playerSelection, computerSelection);
			
			
	function endGame (playerScore, computerScore, tieGame) {
		if (playerScore == 5) {
			document.querySelector("#winnerMessage").textContent = "GAME OVER YOU WIN!!!";
		} else if (computerScore == 5) {
			document.querySelector("#winnerMessage").textContent = "GAME OVER YOU LOSE!!!";
		} else if (tieGame == 5) {
			document.querySelector("#winnerMessage").textContent = "GAME OVER IT IS A TIE!!!";
		}
	}
}