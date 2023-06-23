
let choice = prompt(`Lets play a game. Type "rock, paper, or scissors" `);
console.log(choice);
if (choice == "rock"){
    alert ("You chose rock")
}
if (choice == "paper") {
    alert ("You chose paper")
}
if (choice == "scissors"){
    alert ("You chose scissors")
}
else if (choice != "rock" && choice != "paper" && choice != "scissors"){
    alert (choice + " does not compute. Please choose rock, paper, or scissors")
}
function getComputerChoice(random){
    alert("hello")
}