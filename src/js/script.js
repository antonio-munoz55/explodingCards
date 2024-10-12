import { mainElement, deck, NUM_CARD_BOMB, NUM_CARD_DEFUSE, NUM_CARD_SKIP, NUM_CARD_NOPE, NUM_MAX_POINT, NUM_MIN_POINT } from "./constants.js";
import { Card } from "./card.js";

// Generate the cards and shuffle them
generateCards();

chooseCards(deck);

console.log(deck);

// Create the title container and add it to the main element
let titleContainer = document.createElement("div");
titleContainer.setAttribute("class", "titleContainer");
mainElement.append(titleContainer);

// Create the title and add it to the title container
let title = document.createElement("h1");
title.textContent = "EXPLODING CARDS"
title.setAttribute("class", "title");
titleContainer.append(title);

// Create the card container and add it to the main element
let cardContainer = document.createElement("div");
cardContainer.setAttribute("class", "cardContainer");
mainElement.append(cardContainer);

// Button to draw card
let buttonDraw = document.createElement("button");
buttonDraw.textContent = "Draw card";
buttonDraw.addEventListener("click", draw);
cardContainer.append(buttonDraw);

// Button to restart the game, initially hidden
let buttonRestart = document.createElement("button");
buttonRestart.textContent = "Restart";
buttonRestart.addEventListener("click", restart);
buttonRestart.style.display = "none";
cardContainer.append(buttonRestart);

// "Game Over" message, initially hidden
let endMessage = document.createElement("h2");
endMessage.textContent = "Game Over";
endMessage.setAttribute("class", "end");
endMessage.style.display = "none";
cardContainer.append(endMessage);

// Create the main card container, initially hidden
let cardMain = document.createElement("div");
cardMain.style.display = "none";
cardContainer.append(cardMain);

// Top part of the card
let cardTop = document.createElement("div");
cardTop.setAttribute("class", "cardTop");
cardMain.append(cardTop);

// Top image of the card
let cardTopImg = document.createElement("img");
cardTopImg.setAttribute("class", "cardTopImg");
cardTop.append(cardTopImg);

// Card title
let cardTitle = document.createElement("div");
cardTop.append(cardTitle);

// Card type
let cardType = document.createElement("h1");
cardTitle.append(cardType);

// Card description
let cardDesc = document.createElement("p");
cardTitle.append(cardDesc);

// Card value (only for points cards)
let cardValue = document.createElement("h2");
cardTop.append(cardValue);

// Main image of the card
let cardImg = document.createElement("img");
cardImg.setAttribute("class", "cardImg");
cardMain.append(cardImg);

// Bottom part of the card (similar design as the top part)
let cardDown = document.createElement("div");
cardDown.setAttribute("class", "cardDown");
cardMain.append(cardDown);

// Bottom image of the card
let cardDownImg = document.createElement("img");
cardDownImg.setAttribute("class", "cardTopImg");
cardDown.append(cardDownImg);

// Bottom title of the card
let cardTitleDown = document.createElement("div");
cardDown.append(cardTitleDown);

// Card type in the bottom part
let cardTypeDown = document.createElement("h1");
cardTitleDown.append(cardTypeDown);

// Card description in the bottom part
let cardDescDown = document.createElement("p");
cardTitleDown.append(cardDescDown);

// Card value in the bottom part
let cardValueDown = document.createElement("h2");
cardDown.append(cardValueDown);


paintCard();

// Function to generate the cards
function generateCards() {
    let oneCard;

    // Generate "Bomb" cards
    for(var i = 0; i < NUM_CARD_BOMB; i++){
        oneCard = new Card("Bomb");
        deck.push(oneCard);
    }

    // Generate "Defuse" cards
    for(var i = 0; i < NUM_CARD_DEFUSE; i++){
        oneCard = new Card("Defuse");
        deck.push(oneCard);
    }

    // Generate "Skip turn" cards
    for(var i = 0; i < NUM_CARD_SKIP; i++){
        oneCard = new Card("Skip turn");
        deck.push(oneCard);
    }

    // Generate "Nope" cards
    for(var i = 0; i < NUM_CARD_NOPE; i++){
        oneCard = new Card("Nope");
        deck.push(oneCard);
    }

    // Generate points cards with random values
    for(var i = 0; i < 35; i++){
        let randomNumber = Math.floor(Math.random() * NUM_MAX_POINT) + NUM_MIN_POINT;
        oneCard = new Card("Points", randomNumber);
        deck.push(oneCard);
    }
}

// Function to shuffle the deck
function chooseCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Select a random index between 0 and i
      [array[i], array[j]] = [array[j], array[i]];   // Swap the cards
    }
    return array;
}

// Function to draw a card from the deck
function draw() {
    if(!deck.length == 0){
        paintCard(); // Display the last card in the deck
        deck.pop(); // Remove the card from the deck
        cardMain.style.display = "flex"; // Show the card
    } else {
        // If no more cards, show the game over message and restart button
        buttonRestart.style.display = "block";
        endMessage.style.display = "block";
        buttonDraw.style.display = "none";
        cardMain.style.display = "none";
    }
    console.log(deck);
}

// Function to display the current card on the screen
function paintCard() {
    let specificCard = deck[deck.length - 1]; // Get the last card

    // Set the card's attributes to the visual elements
    cardTopImg.setAttribute("src", specificCard.icon);
    cardType.textContent = specificCard.type;
    cardDesc.textContent = specificCard.description;
    cardValue.textContent = specificCard.value;

    cardImg.setAttribute("src", specificCard.icon);

    cardDownImg.setAttribute("src", specificCard.icon);
    cardTypeDown.textContent = specificCard.type;
    cardDescDown.textContent = specificCard.description;
    cardValueDown.textContent = specificCard.value;

    cardMain.classList = ""; // Reset style classes
    cardMain.setAttribute("class", "cardStyle");
    cardMain.classList.add(specificCard.color); // Add the specific card color
}

// Function to restart the game
function restart() {
    generateCards(); // Regenerate the cards

    chooseCards(deck); // Shuffle the deck

    buttonDraw.style.display = "block";

    buttonRestart.style.display = "none";

    cardMain.style.display = "flex";

    endMessage.style.display = "none";
}