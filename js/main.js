console.log('up and running!');
var cards = [
 {
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 },
];

var cardsInPlay = [];

//save the flipped cards into the holder Array.
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
};

/*Creates the card images and listens for when the user
clicks on a card*/
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

//Check that the holder Array contains two cards. Also, alerts results.
var checkForMatch = function(){
 if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match");
		}
		else {
			alert("*sad trombone* sorry try again!");
		};
 	};
};

createBoard();
