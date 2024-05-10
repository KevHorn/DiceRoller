let addBtn = document.getElementById('add-btn')
let rollBtn = document.getElementById('roll-btn')
let test = document.getElementById('test-header')
let diceTray = document.getElementById('dice-tray')
let clearBtn = document.getElementById('clear-btn')
let numberOfDice = document.getElementById('number-of-dice')

let dieImgArr = [
    'C:\\coding projects\\Dice Roller\\Die Imgs\\1-Dice-One.png',
    'C:\\coding projects\\Dice Roller\\Die Imgs\\2-Dice-Two.png',
    'C:\\coding projects\\Dice Roller\\Die Imgs\\3-Dice-Three.png',
    'C:\\coding projects\\Dice Roller\\Die Imgs\\4-Dice-Four.png',
    'C:\\coding projects\\Dice Roller\\Die Imgs\\5-Dice-Five.png',
    'C:\\coding projects\\Dice Roller\\Die Imgs\\6-Dice-Six.png'
]



let addedDice = ''
let diceArr = []
let rolledDice = ''
numberOfDice.innerHTML = `Number of die: ${diceArr.length}`

function randomNumber() {
    return Math.floor(Math.random() * 6)
    
}

function renderTray() {
    addedDice += `<img class="die-img" src="${dieImgArr[randomNumber()]}">`
    
}

function renderRolledDice() {
    rolledDice += `<img class="die-img" src="${dieImgArr[randomNumber()]}">`
    
}

function renderNumberOfDice() {
    numberOfDice.innerHTML = `Number of die: ${diceArr.length}`
}




addBtn.addEventListener('click', function() {
    renderTray()
    diceTray.innerHTML = addedDice
    diceArr += 1
    renderNumberOfDice()
})

rollBtn.addEventListener('click', function() {
        for (let i = 0; i < diceArr.length; i++) {
            renderRolledDice()
        }
        diceTray.innerHTML = rolledDice
        rolledDice = ''
        renderNumberOfDice()
})


clearBtn.addEventListener('click', function() {
    addedDice = ''
    rolledDice = ''
    diceArr = []
    diceTray.innerHTML = addedDice
    renderNumberOfDice()
})

