//IIFE
(function(){

//Code Refactoring
const p1ScoreDisplay = document.getElementById('p1Score');
const p2ScoreDisplay = document.getElementById('p2Score');
const wScoreDisplay = document.querySelector('p span');
const inputScore = document.getElementById('inputScore');
const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');
let p1Score = 0;
let p2Score = 0;
let WiningScore = 5;
let gameover = false;


p1Btn.addEventListener('click', () => {

    //Data change
    if (!gameover) {
        p1Score++;
        winner(p1Score, WiningScore);
    }

    //Show Data Changed data
    p1ScoreDisplay.textContent = p1Score;

});



p2Btn.addEventListener('click', () => {
    if (!gameover) {
        p2Score++;
        winner(p2Score, WiningScore)
        p2ScoreDisplay.textContent = p2Score;
    }
});

function winner(oldScore, WiningScore) {
    if (oldScore === WiningScore) {

        if(p1Score === WiningScore){
            p1ScoreDisplay.classList.add('winner');
        }else{
            p2ScoreDisplay.classList.add('winner');
         }

        gameover = true;
        console.log('Game Over');
        p2Btn.setAttribute('disabled', 'disabled');
        p1Btn.setAttribute('disabled', 'disabled');
    }

}

inputScore.addEventListener('change', () => {
    console.log(typeof inputScore.value);
    WiningScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    reset();

});

function reset() {
    let p1Score = 0;
    let p2Score = 0;
    gameover = false;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove('winner');
    p1ScoreDisplay.classList.remove('winner');
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
};
resetBtn.addEventListener('click',reset);
})();

