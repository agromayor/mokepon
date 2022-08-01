let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3
let combatResult


function startGame(){
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'none'

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'none'

    let sectionMessage = document.getElementById('messages')
    sectionMessage.style.display = 'none'

    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)

    let buttonAttackFire = document.getElementById('button-fire')
    buttonAttackFire.addEventListener('click', selectAttackFire)
    let buttonAttackWater = document.getElementById('button-water')
    buttonAttackWater.addEventListener('click', selectAttackWater)
    let buttonAttackGround = document.getElementById('button-ground')
    buttonAttackGround.addEventListener('click', selectAttackGround)

    let buttonRestart = document.getElementById('button-restart')
    buttonRestart.addEventListener('click', restartGame)
}

//PET PICKER-------------------------------
function selectPetPlayer(){
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'flex'


    let game = 1 
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let petNamePlayer = document.getElementById('pet-name-player')

    if(inputHipodoge.checked)
    {
        petNamePlayer.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked)
    {
        petNamePlayer.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked)
    {
        petNamePlayer.innerHTML = 'Ratigueya'
    } else if(inputLangostelvis.checked)
    {
        petNamePlayer.innerHTML = 'Langostelves'
    } else if(inputTucapalma.checked)
    {
        petNamePlayer.innerHTML = 'Tucapalma'
    } else if(inputPydos.checked)
    {
        petNamePlayer.innerHTML = 'Pydos'
    } else{
        game = 0
        alert('Please select a pet')
    }

    if(game == 1){
        selectPetEnemy()
    }    

    let sectionSelectPet = document.getElementById('select-pet')
    sectionSelectPet.style.display = 'none'
    
}

function selectPetEnemy(){
    let petEnemyRandom = random(1,6)
    let petNameEnemy = document.getElementById('pet-name-enemy')

    if(petEnemyRandom == 1)
    {
        petNameEnemy.innerHTML = 'Hipodoge'
    } else if(petEnemyRandom == 2)
    {
        petNameEnemy.innerHTML = 'Capipepo'
    } else if(petEnemyRandom == 3)
    {
        petNameEnemy.innerHTML = 'Ratigueya'
    } else if(petEnemyRandom == 4)
    {
        petNameEnemy.innerHTML = 'Langostelves'
    } else if(petEnemyRandom == 5)
    {
        petNameEnemy.innerHTML = 'Tucapalma'
    } else if(petEnemyRandom == 6)
    {
        petNameEnemy.innerHTML = 'Pydos'
    } 
}

//ATTACKS---------------------------------
function selectAttackFire(){
    playerAttack = 'FIRE'
    selectEnemyAttack()
}

function selectAttackWater(){
    playerAttack = 'WATER'
    selectEnemyAttack()
}

function selectAttackGround(){
    playerAttack = 'GROUND'
    selectEnemyAttack()
}

function selectEnemyAttack(){
    let attackEnemyRandom = random(1,3)

    if(attackEnemyRandom == 1)
    {
        enemyAttack = 'FIRE'
    } else if(attackEnemyRandom == 2)
    {
        enemyAttack = 'WATER'
    } else if(attackEnemyRandom == 3)
    {
        enemyAttack = 'GROUND'
    } 

    combat()
    
}

//COMBAT---------------------------------
function combat(){
    let playerLivesResult = document.getElementById('player-lives')
    let enemyLivesResult = document.getElementById('enemy-lives')

    if(playerAttack == enemyAttack){
        combatResult = "It's a Tie 🤝"
    } else if (playerAttack == 'FIRE' && enemyAttack == 'GROUND' 
            || playerAttack == 'WATER' && enemyAttack == 'FIRE' 
            || playerAttack == 'GROUND' && enemyAttack == 'WATER'){
        combatResult = 'You won the fight ✌️'
        enemyLives --
        enemyLivesResult.innerHTML = enemyLives
    } else{
        combatResult = 'You lost the fight 👎'
        playerLives --
        playerLivesResult.innerHTML = playerLives
    }

    createScoreMessage()
    checklives()
}

//SCORE MESSAGE--------------------------
function createScoreMessage(){
    let sectionMessage = document.getElementById('messages')
    sectionMessage.style.display = 'flex'
   
    let scoreMessage = document.getElementById('score')
    let playerAttacksMessages = document.getElementById('player-attakcs')
    let enamyAttacksMessages = document.getElementById('enemy-attacks')

    let newPlayerAttack = document.createElement('p')
    let newEnamyAttack = document.createElement('p')

    scoreMessage.innerHTML = combatResult
    newPlayerAttack.innerHTML = playerAttack
    newEnamyAttack.innerHTML = enemyAttack

    playerAttacksMessages.appendChild(newPlayerAttack)
    enamyAttacksMessages.appendChild(newEnamyAttack)
}

//CHECK LIVES----------------------------
function checklives(){
    if(enemyLives == 0){
        createResultMessage('You definitely won the battle 🏆')
    } 
    if(playerLives == 0){
        createResultMessage('You definitely lost the battle 🩹')
    }
}

//RESULT MESSAGE-------------------------
function createResultMessage(finalResult){
    let scoreMessages = document.getElementById('score')
    scoreMessages.innerHTML = finalResult

    let buttonAttackFire = document.getElementById('button-fire')
    buttonAttackFire.disabled = true
    let buttonAttackWater = document.getElementById('button-water')
    buttonAttackWater.disabled = true
    let buttonAttackGround = document.getElementById('button-ground')
    buttonAttackGround.disabled = true

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'flex'
}

//RESTART GAME
function restartGame()
{
    location.reload()
}

//RANDOM--------------------------------
function random(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//START GAME---------------------------
window.addEventListener('load', startGame)
