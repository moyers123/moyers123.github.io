if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

class mixOrMatch {
    constructor(totalTime, card) {
        this.cardArray = card;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
    }
    startGame() {
        this.cardToCheck = null;
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let card = Array.from(document.getElementsByClassName('cards'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            //game.startGame();//
        });
    });
    card.forEach(cards => {
        cards.addEventListener('click', () => {
            //game.flipCard(cards);//
        });
    });
}