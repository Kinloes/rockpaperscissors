const rps = ["rock", "paper", "scissors"]
let answer
let wins = 0
let losses = 0
let counter = 1
game()
function game(){
function getComputerChoice(){
    answer = (rps[(Math.floor(Math.random() * rps.length))])}
// <OBSOLETE> let choice = prompt(`Lets play a game. Type "rock, paper, or scissors" `).toLowerCase()
getComputerChoice()
console.log (answer)

// if player chooses rock 
if (choice == "rock"){
    alert ("You chose rock")
}
if (choice == "rock" && answer ==  "rock"){
    alert ("I also chose rock. It's a tie!")
    newRound()
}
if (choice == "rock" && answer == "scissors"){
    alert ("Your rock smashes my scissors! You win!")
    wins += 1
    newRound()
}
if (choice == "rock" && answer == "paper"){
    alert ("My paper covers your rock! You lose!")
    losses += 1
    newRound()
}

// if player chooses paper
if (choice == "paper") {
    alert ("You chose paper")
}
if (choice == "paper" && answer == "paper"){
    alert ("I also chose paper. It's a tie!")
    newRound()
}
if (choice == "paper" && answer == "scissors"){
    alert ("I cut your paper into pieces with my scissors! You lose!")
    losses += 1
    newRound()
}
if (choice == "paper" && answer == "rock"){
    alert ("Your paper wraps up my rock! You win!")
    wins += 1
    newRound()
}

// if player chooses scissors
if (choice == "scissors"){
    alert ("You chose scissors")
}
if (choice == "scissors" && answer == "scissors"){
    alert ("I also chose scissors. It's a tie!")
    newRound()
}
if (choice == "scissors" && answer == "rock"){
    alert ("My rock smashes your scissors! You lose!")
    losses += 1
    newRound()
}
if (choice == "scissors" && answer == "paper"){
    alert ("You cut my paper into pieces! You win!")
    wins += 1
    newRound()
}

//if player choice is invalid
else if (choice != "rock" && choice != "paper" && choice != "scissors"){
    alert (choice + " does not compute. Please choose rock, paper, or scissors")
}
}

//plays a new round or ends the game after 5 games
newRound()
function newRound(){
alert (`You have ${wins} wins and ${losses} losses`)
if (counter == 5){
    alert("That's a wrap!")
    if (wins >= losses){
        alert("Congrats! You win!")
        endGame()
    }
    if (wins == losses){
        alert("Looks like we tied! That's boring.")
        endGame()
    }
    if (wins <= losses){
        alert("Sorry, you lose!")
        endGame()
    }
}
//after a round is complete
let YN = prompt (`We've played ${counter} games. Would you like to play again? Input yes or no.`).toLowerCase()
if (YN == "yes"){
    counter += 1
    game()
}
if (YN == "no"){
    alert ("Goodbye")
    endGame()
}
if (YN != "yes" && YN != "no"){
    alert ("Please input yes or no")
    newRound()
}
}
//This function ends the script
function endGame(){
    throw error()
}
console.log (wins)
console.log (losses)
console.log (counter)