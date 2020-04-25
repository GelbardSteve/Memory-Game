const imgSection = document.querySelectorAll('.img-section');

let flipped = false;
let locked = false;
let firstCard, secondCard;

function flipCard() { 
    if (locked) return;
    this.classList.add('flip'); 

    if(!flipped){
        flipped = true;
        firstCard = this;
    } else {
        flipped = false;
        secondCard = this;

        checkthematch();
    }
}

function checkthematch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    } else {
        locked = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            locked = false;
        }, 1500);
    }
}

(function mixed() {
    imgSection.forEach(img => {
        let random = Math.floor(Math.random() * 11) + 1;
        img.style.order = random;
    })
})();

imgSection.forEach(img => img.addEventListener('click', flipCard));