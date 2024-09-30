const choiceArray= ["SCHERE", "STEIN", "PAPIER"]

let playerPoints = 0;
let computerPoints = 0;

function gameFlow(choicePlayer, choiceComputer){

if (choicePlayer === "SCHERE" && choiceComputer === "PAPIER" || choicePlayer === "STEIN" && choiceComputer === "SCHERE" || choicePlayer === "PAPIER" && choiceComputer === "STEIN"){
    playerPoints++
    //Ersetze console durch p in html
    console.log("Du gewinnst. Computer hatte x, du hattest y")
    console.log("Es steht x:y")
}
else{
    computerPoints++
    console.log("Du verlierst. Computer hatte x, du hattest y")
    console.log("Es steht x:y")
}
}

    
function computerChoice(choices){
    let choice = choices[Math.floor(Math.random() * choiceArray.length)]
    return choice
}

function playerChoice(){
    let choice = prompt("Give me your choice: ")
    choice.toUpperCase
    return choice
}

function runGame(rounds){
    let timer = 0
    while (timer <= rounds)
        timer++
        const ergebnisComp = computerChoice(choiceArray)
        const ergebnisPlay = playerChoice()
        gameFlow(ergebnisPlay, ergebnisComp)
}

runGame(3)