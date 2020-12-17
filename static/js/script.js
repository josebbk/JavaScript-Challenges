// Challenge 1: Age In Days (REDO)

function ageInDays() {
    let birthYear = prompt('What Year Were You Born?');
    let ageDays = (2020 - birthYear) * 365;
    let div = document.createElement('div');
    div.setAttribute('class', 'flex-box-container-1');
    div.setAttribute('id', 'age-day-div');
    let h1 = document.createElement('h1');
    let answerText = document.createTextNode('You Are ' + ageDays + ' Days Old');
    h1.appendChild(answerText);
    div.appendChild(h1);
    document.getElementById('container-1').appendChild(div);
}

function resetAge() {
    document.getElementById('age-day-div').remove()
}

// Challenge 2: Gif Generator

function Generate() {
    let div = document.createElement('div');
    div.setAttribute('class', 'flex-box-container-2');
    div.setAttribute('id', 'gif-generator');
    let img = document.createElement('img');
    let link = 'https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif';
    img.setAttribute('src', link);
    div.appendChild(img);
    if (document.getElementById('gif-generator')) {
        document.getElementById('gif-generator').appendChild(img);
    } else {
        document.getElementById('container-2').appendChild(div);
    }
}

function resetGenerator() {
    document.getElementById('gif-generator').remove();
}


// Challenge 3: Rock Paper Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log('My Choice: ' + humanChoice);
    botChoice = botRandomChoice();
    console.log('Bot Choice: ' + botChoice);
    let winner = decideWinner(humanChoice, botChoice);
    console.log('Score Ratio: ' + winner);
    let message = finalMessage(winner[0]);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function botRandomChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomNum]
}

function decideWinner(humanChoice, botChoice) {
    let rpsDatabase = {
        'rock': {'paper': 0, 'rock': 0.5, 'scissors': 1},
        'paper': {'scissors': 0, 'paper': 0.5, 'rock': 1},
        'scissors': {'rock': 0, 'scissors': 0.5, 'paper': 1},
    };

    let humanScore = rpsDatabase[humanChoice][botChoice];
    let botScore = rpsDatabase[botChoice][humanChoice];
    return [humanScore, botScore]
}

function finalMessage(humanScore) {
    if (humanScore === 1) {
        return {'message': 'You Win!!!', 'color': 'green'}
    } else if (humanScore === 0.5) {
        return {'message': 'You Tied!!!', 'color': 'yellow'}
    } else if (humanScore === 0) {
        return {'message': 'You Lose!!!', 'color': 'red'}
    }
}

function rpsFrontEnd(humanImgChoice, botImgChoice, resultMessage) {
    let imgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };

    // clear images from screen to show results
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create new divs for showing results
    let humanDiv = document.createElement('div');
    humanDiv.setAttribute('id', 'rpsGame-results');
    let botDiv = document.createElement('div');
    botDiv.setAttribute('id', 'rpsGame-results');
    let messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'rpsGame-results');

    // a bad way to write this code, but the guy said he's gonna change it...
    humanDiv.innerHTML = "<img src='" + imgDatabase[humanImgChoice] + "' width=150 height=150 style='box-shadow: 0 10px 50px rgba(37, 50, 233, 1)'>";
    messageDiv.innerHTML = "<h1 style='color: " + resultMessage['color'] + "; font-size:60px padding: 30px; '>" + resultMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imgDatabase[botImgChoice] + "' width=150 height=150 style='box-shadow: 0 10px 50px rgba(243, 38, 24, 1)'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// rpsGame Reset Function


// Challenge 4: Change Color Of All Buttons

function btnColorChange(color) {
    if (color.value === 'red') {
        btnRed();
    } else if (color.value === 'green') {
        btnGreen();
    } else if (color.value === 'default') {
        btnDefault();
    } else if (color.value === 'random') {
        btnRandom();
    }
}

let all_buttons = document.getElementsByTagName('button');
let copy_buttons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copy_buttons.push(all_buttons[i].classList[1]);
}

function btnRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

function btnGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

function btnDefault() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_buttons[i]);
    }
}

function btnRandom() {
    let ColorChoices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {
        let randomColor = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(ColorChoices[randomColor]);
    }
}

// Challenge 5: Blackjack

let BlackJackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 10,
        'Q': 10,
        'K': 10,
        'A': [1, 11]
    },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = BlackJackGame['you'];
const DEALER = BlackJackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', BlackJackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', BlackJackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

function BlackJackHit() {
    if (BlackJackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard() {
    return BlackJackGame['cards'][Math.floor(Math.random() * 13)];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardIMG = document.createElement('img');
        cardIMG.src = `static/images/${card}.png`;

        document.querySelector(activePlayer['div']).appendChild(cardIMG);
        hitSound.play();
    }
}

function BlackJackDeal() {
    if (BlackJackGame['turnsOver'] === true) {

        BlackJackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';

        BlackJackGame['turnsOver'] = false;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + BlackJackGame['cardsMap'][card][0] <= 21) {
            activePlayer['score'] += BlackJackGame['cardsMap'][card][0]
        } else if (activePlayer['score'] + BlackJackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += BlackJackGame['cardsMap'][card][1]
        }
    } else {
        activePlayer['score'] += BlackJackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    BlackJackGame['isStand'] = true;

    while (DEALER['score'] < 16 && BlackJackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    BlackJackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResults(winner)
}

function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            BlackJackGame['wins']++;
            winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            BlackJackGame['losses']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            BlackJackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        BlackJackGame['draws']++;

    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        BlackJackGame['losses']++;
        winner = DEALER;
    }

    return winner
}

function showResults(winner) {
    let message, messageColor;

    if (BlackJackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = BlackJackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSound.play()
        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = BlackJackGame['losses'];
            message = 'You Lose!';
            messageColor = 'red';
            lossSound.play()
        } else {
            document.querySelector('#draws').textContent = BlackJackGame['draws'];
            message = 'You Tied!';
            messageColor = 'yellow';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}
