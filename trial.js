'use strict';


let p1Score = parseInt(document.getElementById('score--0').textContent);
let p2Score = parseInt(document.getElementById('score--1').textContent);

const hold = document.querySelector('.btn--hold');

let currentP1Score = parseInt(document.getElementById('current--0').textContent);
let currentP2Score = parseInt(document.getElementById('current--1').textContent);

const player1BG = document.querySelector('.player--0');
const player2BG = document.querySelector('.player--1');

const holdBtn = document.querySelector('.btn--hold');

// console.log(typeof currentP1Score, currentP1Score);
// console.log(typeof currentP2Score, currentP2Score);

const rollDice = document.querySelector('.btn--roll');
let diceRollNumber = Math.trunc(Math.random() * 6) + 1;
const diceView = document.querySelector('.dice');


p1Score = document.getElementById('score--0').textContent = 0;
p2Score = document.getElementById('score--1').textContent = 0;
diceView.style.display = 'none';

let p1Turn = true;
let p2Turn = false;


// const listenHold = function () {
//     hold.
// }

const player1Toggle = function () {
    document.getElementById('current--0').textContent = 0;
    p1Turn = false;
    player1BG.classList.remove('player--active');

    p2Turn = true;
    player2BG.classList.add('player--active');
}

const updatePlayer1Score = function () {
    currentP1Score += diceRollNumber;
    document.getElementById('current--0').textContent = currentP1Score;
    
}

const player2Toggle = function () {
    document.getElementById('current--1').textContent = 0;
    p2Turn = false;
    player2BG.classList.remove('player--active')

    p1Turn = true;
    player1BG.classList.add('player--active')
    currentP2Score = 0;
}

const updatePlayer2Score = function () {
    currentP2Score += diceRollNumber;
    document.getElementById('current--1').textContent = currentP2Score;
}


rollDice.addEventListener('click', () => {
    diceView.src = `dice-${diceRollNumber}.png`;
    diceView.style.display = 'block';

    if (p1Turn) {
        if (diceRollNumber === 1){
            player1Toggle();
            currentP1Score = 0;


        } else if (p1Turn){
            updatePlayer1Score();
            
            holdBtn.addEventListener('click', () => {
                console.log(p1Score, currentP1Score, p1Score + currentP1Score)
                document.getElementById('score--0').textContent = (currentP1Score + p1Score);
                player1Toggle();
            })

        }
        diceRollNumber = Math.trunc(Math.random() * 6) + 1;
    }


    else if (p2Turn) {
        if (diceRollNumber === 1){
            player2Toggle();
            currentP2Score = 0;

        } else if (p2Turn) {
            updatePlayer2Score();
            holdBtn.addEventListener('click', () => {
                document.getElementById('score--1').textContent = currentP2Score;
                player2Toggle();
            })
        }
        
    }    
    diceRollNumber = Math.trunc(Math.random() * 6) + 1;

});

