const choicesButtons = document.querySelectorAll('[data-choice]')
const finalColumn = document.querySelector('[data-final-column]')
const yourSpan = document.querySelector('.yourscore')
const computerSpan = document.querySelector('.computerscore')
const CHOICES = [
{
    name: 'rock',
    img: '✊',
    beat: 'scissors'
},
{
    name: 'paper',
    img: '✋',
    beat: 'rock'
},
{
    name: 'scissors',
    img: '✌',
    beat: 'paper'
}
]
choicesButtons.forEach(choicesButton => {
choicesButton.addEventListener('click', e => {
    const choicesName = choicesButton.dataset.choice
    const choice = CHOICES.find(choice => choice.name === choicesName)

    makeChoice(choice)
})
})

function isWinner(choice, opponentChoice){
    return choice.beat === opponentChoice.name    
}


function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function makeChoice(choice){
    const computerChoice = randomChoice()
    const youWin = isWinner(choice, computerChoice)
    const youLose = isWinner(computerChoice, choice)

    addChoiceResult(computerChoice, youLose)
    addChoiceResult(choice, youWin)

    if(youWin)  {
    incrementScore(yourSpan)
    document.querySelector('#yow').innerHTML = "You Win!"
    }
    if(youLose){incrementScore(computerSpan)
       document.querySelector('#yow').innerHTML = "You Lose!"}
}

function addChoiceResult(choice, winner){
    const div = document.createElement('div')
    div.innerText = choice.img
    div.classList.add('match-result')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function randomChoice(){
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}