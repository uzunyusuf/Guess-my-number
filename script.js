const highScoreObj = document.querySelector('.highscore');
const randomNumberGenerator1to25 = () => Math.floor(Math.random() * 25) + 1;
let randomNumber1to25 = randomNumberGenerator1to25();
const btnCheck = document.querySelector("#btn-check");
let inputFieldGuess = document.querySelector("#input-guess-field");
let message = document.querySelector(".message");
const secretNumber = document.querySelector(".number");
const scorePoint = document.querySelector(".score");
const btnAgain = document.querySelector('.again');
let point = 7;
let highScore = 0;

function guessNumber() {
    if (point > 0 && message.innerHTML !== 'You guessed') {
        if (Number(inputFieldGuess.value) > 0 && Number(inputFieldGuess.value) < 26) {
            if (Number(inputFieldGuess.value) > randomNumber1to25) {
                message.innerHTML = "Too High";
            } else if (Number(inputFieldGuess.value) < randomNumber1to25) {
                message.innerHTML = "Too Low";
            } else if (Number(inputFieldGuess.value) === randomNumber1to25) {
                message.innerHTML = "You guessed";
                secretNumber.innerHTML = randomNumber1to25;
                document.body.style.backgroundColor = "green";    
                highScore = Math.max(highScore, point);
                highScoreObj.innerHTML = highScore;
            }
            console.log(Number(inputFieldGuess.value));
        } else {
            message.innerHTML = "Please enter a valid number, [1-25]";
            document.body.style.backgroundColor = "red";
        }
        point--;
        scorePoint.innerHTML = point;
        if (point === 0 && Number(inputFieldGuess.value) !== randomNumber1to25) {
            message.innerHTML = "You Loose!!!";
            document.body.style.backgroundColor = "red";
        }
    }
}
btnCheck.addEventListener("click", guessNumber);
console.log(randomNumber1to25);
  btnAgain.onclick = () => {
      point = 7;
      scorePoint.innerHTML = point;
      document.body.style.backgroundColor = "#222";
      randomNumber1to25 = randomNumberGenerator1to25();
      console.log(randomNumber1to25);
      secretNumber.innerHTML = '?';
      inputFieldGuess.value = '';
      message.innerHTML = 'Start guessing...';      
}


