

const btn = document.querySelector('.check');
const message = document.querySelector('.message')
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const scoreCard = document.querySelector('.score')
const again = document.querySelector('.again')
const winningScore = document.querySelector('.highscore')





let Secertnum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;



btn.addEventListener('click', function(){
    
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        message.textContent = 'Incorrect Number!!'
    }else if (guess === Secertnum){
        number.textContent = Secertnum;
        message.textContent = 'Well done Correct Number!!'
        document.querySelector('body').style.backgroundColor = 'green';
        
        if(score > highScore){
            highScore = score;
            winningScore.textContent = highScore;
        }


    }else if(guess > Secertnum) {
        if(score > 1) {
            score--;
            message.textContent = 'Too high Try again!!'
            scoreCard.textContent = score
        }  else {
            message.textContent = 'YOU LOSE!!'
        }
    } else if(guess < Secertnum){
        if(score > 1) {
            score--;
            message.textContent = 'Too low Try again!!'
            scoreCard.textContent = score
        }  else {
            message.textContent = 'YOU LOSE!!'
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

again.addEventListener('click', function(){
    score = 20;
    scoreCard.textContent = 20;
    Secertnum = Math.trunc(Math.random()*20)+1;
    number.textContent = Secertnum;
    
    message.textContent = 'start guessing'
    guess.value = '';
    number.textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222';
   

    

})

