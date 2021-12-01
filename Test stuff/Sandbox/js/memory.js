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
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard(cards) {
        if(this.canFlipCard(cards)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            cards.classList.add('visible');
        }    
    }

    canFlipCard(cards) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardtoCheck;
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let card = Array.from(document.getElementsByClassName('cards'));
    let game = new mixOrMatch(100, card);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
    card.forEach(cards => {
        cards.addEventListener('click', () => {
            game.flipCard(cards);
        });
    });
}