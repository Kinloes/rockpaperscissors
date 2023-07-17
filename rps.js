const rps = ["rock", "paper", "scissors"];
let answer;
let wins = 0;
let losses = 0;
let counter = 0;
let reply = document.getElementById("reply");
let para = document.getElementById("results");
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
if (answer ==  "rock"){
    reply.textContent = "I also chose rock - It's a tie!";
    counter += 1;
    newRound();
    return;
}
else if (answer == "scissors"){
    reply.textContent = "Your rock smashes my scissors!";
    wins += 1;
    counter += 1;
    newRound();
    return;
}
else if (answer == "paper"){
    reply.textContent = "My paper covers up your rock!";
    losses += 1;
    counter += 1;
    newRound();
    return;
}
}
function paperTrue(){
    if (answer == "paper"){
        reply.textContent = "I also chose paper - It's a tie";
        counter += 1;
        newRound();
    }
    else if (answer == "scissors"){
        reply.textContent = "My scissors cut up your paper!";
        losses += 1;
        counter += 1;
        newRound();
    }
    else if (answer == "rock"){
        reply.textContent = "Your paper wraps up my rock!";
        wins += 1;
        counter += 1;
        newRound();
    }
}
function scissorsTrue(){
    if (answer == "scissors"){
    reply.textContent = "I also chose scissors - It's a tie";
    counter += 1;
    newRound();
}
    else if (answer == "rock"){
    reply.textContent = "My rock smashes your scissors!";
    losses += 1;
    counter += 1;
    newRound();
}
    else if (answer == "paper"){
    reply.textContent = "You cut up my paper with your scissors!";
    wins += 1;
    counter += 1;
    newRound();
}
}

//plays a new round or ends the game after 5 rounds
function newRound(){
    getComputerChoice();
    console.log (answer);
    if (counter == 1){
        para.textContent = `You have ${wins} wins and ${losses} losses`;
        document.body.appendChild(para);
        para.style.color = "blue";}
    else {
    para.textContent = ``;
    document.body.appendChild(para);
    para.textContent = `You have ${wins} wins and ${losses} losses`;
    document.body.appendChild(para);
    }
if (counter === 5){
    let final = document.getElementById("gameOver");
    final.textContent = "That's 5! Game Over!"
    if (wins > losses){
        let finalResults = document.getElementById("finalResults");
        finalResults.textContent = "Congrats! You Win!"
        endGame();}

    if (wins === losses){
        let finalResults = document.getElementById("finalResults");
        finalResults.textContent = "Looks like we tied... That's boring!"
        endGame();}

    if (wins < losses){
        let finalResults = document.getElementById("finalResults");
        finalResults.textContent = "Nice try, but you lost this time!"
        endGame();}
}
}

//This function ends the script
function endGame(){
    let del = document.getElementById("content");
    del.remove();
    para.textContent = `You won ${wins} games and I won ${losses} games`;
    document.body.appendChild(para);
    let replay = document.getElementById("playAgain");
    document.body.appendChild(replay);
    replay.textContent = "Refresh the page to play again!";
    
}