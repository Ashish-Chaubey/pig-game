var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0; 
activePlayer = 0;





document.getElementById('score-0').innerHTML = '0';
document.getElementById('score-1').innerHTML = '0';
document.getElementById('current-0').innerHTML = '0';
document.getElementById('current-1').innerHTML = '0';


// 
document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener('click', function(){
    //generate a random number

    var dice = Math.floor(Math.random()*6) + 1;

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = 'dice-' + dice + '.png';
    //update the current score
    if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
    }else{
    nextPlayer();
    }
});

document.querySelector(".btn-hold").addEventListener('click', function(){

    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
        document.querySelector("#name-" + activePlayer).textContent = 'winner';
        document.querySelector(".dice").style.display = "none";
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else{
        nextPlayer();
    }

    
    
});




function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector(".dice").style.display = "none";
}