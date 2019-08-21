let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

rock_div.addEventListener("click", () => game('rock') )
paper_div.addEventListener("click", () => game('paper'))
scissors_div.addEventListener("click", () => game('scissors'))

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)

    return options[randomIndex]
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (`${userChoice} ${computerChoice}`) {
        case ("rock scissors"):
        case ("scissors paper"):
        case ("paper rock"):
            win(userChoice, computerChoice)
            break

        case ("scissors rock"):
        case ("paper scissors"):
        case ("rock paper"):
            lose(userChoice, computerChoice)
            break

        case ("rock rock"):
        case ("scissors scissors"):
        case ("paper paper"):
            draw(userChoice)
            break
    }
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `Your ${userChoice} beats ${computerChoice}. You win!`
    
    //Animations
    userChoice_div.classList.add('green-glow')
    setTimeout( () => userChoice_div.classList.remove('green-glow'), 300 )

    scoreBoard_div.classList.add('green-glow')
    setTimeout( () => scoreBoard_div.classList.remove('green-glow'), 300 )
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore++
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `Your ${userChoice} loses to ${computerChoice}. You lose.`
    
    //Animations
    userChoice_div.classList.add('red-glow')
    setTimeout( () => userChoice_div.classList.remove('red-glow'), 300 )

    scoreBoard_div.classList.add('red-glow')
    setTimeout( () => scoreBoard_div.classList.remove('red-glow'), 300 )
}

function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `You both chose ${userChoice}. It's a draw.`

    //Animations
    userChoice_div.classList.add('gray-glow')
    setTimeout( () => userChoice_div.classList.remove('gray-glow'), 300 )

    scoreBoard_div.classList.add('gray-glow')
    setTimeout( () => scoreBoard_div.classList.remove('gray-glow'), 300 )
}
