const rps = ["rock", "paper", "scissors"]
let answer
let wins = 0
let losses = 0
let counter = 0
const rock = document.getElementById("r1");
const paper = document.getElementById("p1");
const scissors = document.getElementById("s1");
rock.addEventListener("click", rockTrue);
paper.addEventListener("click", paperTrue);
scissors.addEventListener("click", scissorsTrue);
function getComputerChoice(){
    answer = (rps[(Math.floor(Math.random() * rps.length))])}

getComputerChoice();
console.log (answer);

// if player chooses rock 
function rockTrue(){
    alert ("You chose rock!");
if (answer ==  "rock"){
    alert ("I also chose rock. It's a tie!");
    counter += 1;
    newRound();
    return;
}
else if (answer == "scissors"){
    alert ("Your rock smashes my scissors! You win!");
    wins += 1;
    counter += 1;
    newRound();
    return;
}
else if (answer == "paper"){
    alert ("My paper covers your rock! You lose!");
    losses += 1;
    counter += 1;
    newRound();
    return;
}
}
function paperTrue(){
    alert ("You chose paper");
    if (answer == "paper"){
        alert ("I also chose paper. It's a tie!");
        counter += 1;
        newRound();
    }
    else if (answer == "scissors"){
        alert ("I cut your paper into pieces with my scissors! You lose!");
        losses += 1;
        counter += 1;
        newRound();
    }
    else if (answer == "rock"){
        alert ("Your paper wraps up my rock! You win!");
        wins += 1;
        counter += 1;
        newRound();
    }
}
function scissorsTrue(){
    alert ("You chose scissors");

if (answer == "scissors"){
    alert ("I also chose scissors. It's a tie!");
    counter += 1;
    newRound();
}
else if (answer == "rock"){
    alert ("My rock smashes your scissors! You lose!");
    losses += 1;
    counter += 1;
    newRound();
}
else if (answer == "paper"){
    alert ("You cut my paper into pieces! You win!");
    wins += 1;
    counter += 1;
    newRound();
}
}

//plays a new round or ends the game after 5 rounds
function newRound(){
    getComputerChoice()
    console.log (answer)
    const para = document.createElement('p');
    //const del = document.getElementById('p');
    //para.remove();
    para.textContent = `You have ${wins} wins and ${losses} losses`;
    document.body.appendChild(para);
    para.style.color = "blue";
if (counter === 5){
    alert("That's a wrap!");
    if (wins >= losses){
        alert("Congrats! You win!");
        endGame();}

    if (wins == losses){
        alert("Looks like we tied! That's boring.");
        endGame();}

    if (wins <= losses){
        alert("Sorry, you lose!");
        endGame();}
}}

//This function ends the script
function endGame(){
    throw error()
}