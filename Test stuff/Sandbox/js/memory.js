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

        setTimeout(() => {
            this.shuffleCards();
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    hideCards() {
        this.cardArray.forEach(cards => {
            cards.classList.remove('visible');
            cards.classList.remove('matched');
        });
    }

    flipCard(cards) {
        if(this.canFlipCard(cards)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            cards.classList.add('visible');

            if(this.cardToCheck) {
                this.checkForCardMatch(cards);
            } else {
                this.cardToCheck = cards;
            }
        }    
    }

    checkForCardMatch(cards) {
        if(this.getCardType(cards) === this.getCardType(this.cardToCheck)) {
            this.cardMatch(cards, this.cardToCheck);
        } else {
            this.cardMisMatch(cards, this.cardToCheck);
        }
        this.cardToCheck = null;
    } 

    cardMatch(cards1, cards2) {
        this.matchedCards.push(cards1);
        this.matchedCards.push(cards2);
        cards1.classList.add('matched');
        cards2.classList.add('matched');
        if(this.matchedCards.length === this.cardArray.length) {
            this.victory();
        }
    }

    cardMisMatch(cards1, cards2) {
        this.busy = true;
        setTimeout(() => {
            cards1.classList.remove('visible');
            cards2.classList.remove('visible');
            this.busy = false;
        }, 1000)
    }

    getCardType(cards) {
        return cards.getElementsByClassName('value')[0].src;
    }

    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0) {
                this.gameOver;
            }
        }, 1000);
    }

    gameOver() {
        clearInterval(this.countdown);
        document.getElementById('game-over').classList.add('visible');
    }

    victory() {
        clearInterval(this.countdown);
        document.getElementById('victory').classList.add('visible');
    }

    shuffleCards() {
        for(let i = this.cardArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardArray[randIndex].style.order = i;
            this.cardArray[i].style.order = randIndex;
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