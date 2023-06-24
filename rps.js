const rps = ["rock", "paper", "scissors"];
function getComputerChoice(){
    answer = (rps[(Math.floor(Math.random() * rps.length))])
}
let choice = prompt(`Lets play a game. Type "rock, paper, or scissors" `).toLowerCase();
getComputerChoice()
console.log (answer)

if (choice == "rock"){
    alert ("You chose rock")
}
if (choice == "rock" && answer ==  "rock"){
    alert ("I also chose rock. It's a tie!")
}
if (choice == "paper") {
    alert ("You chose paper")
}
if (choice == "paper" && answer == "paper"){
    alert ("I also chose paper. It's a tie!")
}
if (choice == "scissors"){
    alert ("You chose scissors")
}
if (choice == "scissors" && answer == "scissors"){
    alert ("I also chose scissors. It's a tie!")
}
else if (choice != "rock" && choice != "paper" && choice != "scissors"){
    alert (choice + " does not compute. Please choose rock, paper, or scissors")
}