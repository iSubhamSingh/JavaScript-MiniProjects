let randomNum = parseInt(Math.random() * 100  +  1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#input");
const prevG = document.querySelector("#previousG");
const remainingG = document.querySelector("#remainingG");
const correct = document.querySelector(".correctAns");
const restart = document.querySelector("#restart");

let increment = 0;
let remain = 0;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let inputNumber = userInput.value;
  console.log(inputNumber);
  validate(inputNumber);
});

function validate(inputNumber) {
  if (isNaN(inputNumber) || inputNumber > 100 || inputNumber < 1) {
    alert("Please enter a number between 1 and 100");
    userInput.value = "";
  } else {
    if (inputNumber == randomNum) {
      correct.innerHTML = `<h2 style="color:green">Congratulations! You guessed the correct answer</h2>`;
      endgame();
    } else if (inputNumber > randomNum) {
      correct.innerHTML = `<h2>Your guess is too high</h2>`;
      printMessage(inputNumber);
    } else {
      correct.innerHTML = `<h2>Your guess is too low</h2>`; 
      printMessage(inputNumber);
    }

     
  }
}

function printMessage(inputNumber){
    prevG.innerHTML += ` ${inputNumber} `;
    remain = (10- ++increment );

    if(remain == 0){
        endgame();
        correct.innerHTML = `<h2 style="color:red">Game Over!</h2><p ><strong>Correct Ans : ${randomNum}</strong></p>`;
    } 
    remainingG.innerHTML = ` ${remain} `;
    userInput.value = "";

}

function endgame(){
    userInput.disabled = true;
    submit.disabled = true;
    restart.addEventListener("click", newGame);
   
}

function newGame(){
    location.reload();
}
