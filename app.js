let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r' , 'p' , 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// console.log(getComputerChoice());
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return " Scissor";
}


function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats  ${convertToWord(computerChoice)}(comp). YOU win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),3000);

    // console.log(user);
    // console.log("WIN");
}



function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). YOU lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),3000);
    // console.log("LOSE");
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}(user) equals ${convertToWord(computerChoice)}(comp). GAME draw!  `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'),3000);
    // console.log("DRAW");
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            // console.log("USER WINS.");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            // console.log("USER LOSES.");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            // console.log("ITS A DRAW.");
            break;
    }
    // consol.log("user choice => " + userChoice)
    // console.log("computerChoice => " + computerChoice )
    // console.log("  " + userChoice)

}

function main(){
rock_div.addEventListener('click',function(){
    // console.log("hey you clicked on rock");
    game("r");
})

paper_div.addEventListener('click',function(){
    // console.log("hey you clicked on paper");
    game("p");
})

scissors_div.addEventListener('click',function(){
    game("s");
    // console.log("hey you clicked on scissor");
})
}

main();