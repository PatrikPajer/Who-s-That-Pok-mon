const guessBox = document.querySelector(`[name = "guessName"]`);

let userGuess = "";

function verifyGuess (guess) {
	if(guess != currentName) {
		console.log("Wrong");
	} else if (guess == currentName) {
		console.log("Right");
	}
}

function getGuess(e) {
	if(e.keyCode === 13) {
		userGuess = guessBox.value;
		verifyGuess(userGuess);
		guessBox.value = "";
	} 
}

guessBox.addEventListener("keydown", getGuess);