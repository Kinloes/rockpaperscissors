const rps = ["rock", "paper", "scissors"];
let answer;
game()
function game(){
function getComputerChoice(){
    answer = (rps[(Math.floor(Math.random() * rps.length))])}
let choice = prompt(`Lets play a game. Type "rock, paper, or scissors" `).toLowerCase();
getComputerChoice()
console.log (answer)

// if player chooses rock 
if (choice == "rock"){
    alert ("You chose rock")
}
if (choice == "rock" && answer ==  "rock"){
    alert ("I also chose rock. It's a tie!")
}
if (choice == "rock" && answer == "scissors"){
    alert ("Your rock smashes my scissors! You win!")
}
if (choice == "rock" && answer == "paper"){
    alert ("My paper covers your rock! You lose!")
}

// if player chooses paper
if (choice == "paper") {
    alert ("You chose paper")
}
if (choice == "paper" && answer == "paper"){
    alert ("I also chose paper. It's a tie!")
}
if (choice == "paper" && answer == "scissors"){
    alert ("I cut your paper into pieces with my scissors! You lose!")
}
if (choice == "paper" && answer == "rock"){
    alert ("Your paper wraps up my rock! You win!")
}

// if player chooses scissors
if (choice == "scissors"){
    alert ("You chose scissors")
}
if (choice == "scissors" && answer == "scissors"){
    alert ("I also chose scissors. It's a tie!")
}
if (choice == "scissors" && answer == "rock"){
    alert ("My rock smashes your scissors! You lose!")
}
if (choice == "scissors" && answer == "paper"){
    alert ("You cut my paper into pieces! You win!")
}

//if player choice is invalid
else if (choice != "rock" && choice != "paper" && choice != "scissors"){
    alert (choice + " does not compute. Please choose rock, paper, or scissors")
}
}