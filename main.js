console.log("Start it up, lads!");


var startButton = document.querySelector('#btn');
var resetButton = document.querySelector('#reset');
var orangeNote = document.querySelector('.orange');
var greenNote = document.querySelector('.green');
var purpleNote = document.querySelector('.purple');
var brownNote = document.querySelector('.brown'); 
var orangeSound = document.getElementById('orange-note');
var orangeObject = {element: orangeNote, sound: orangeSound};
var greenSound = document.getElementById('green-note');
var greenObject = {element: greenNote, sound: greenSound};
var purpleSound = document.getElementById('purple-note');
var purpleObject = {element: purpleNote, sound: purpleSound};
var brownSound = document.getElementById('brown-note');
var brownObject = {element: brownNote, sound: brownSound};
 
var computerMoves = [];
var playerMoves = [];
var score = 0;
var num = 0;
var repeatPattern;

//FUNCTION FOR COMPUTER'S RANDOM SELECTION: 

var startItUp = function(event){
	// var randomSelectionObject = {
	// 	squareElement: randomeSelection,
	// 	noteElement: noteElement
	// }
		window.setTimeout(gameInstruction, 1000);
	var blueNotes = [orangeNote, greenNote, purpleNote, brownNote];
	var randomIndex = Math.floor(Math.random()*blueNotes.length);
	var randomSelection = blueNotes[randomIndex];
	console.log(randomSelection);
	var noteObject = {};
	if (randomSelection === blueNotes[0]){
		setTimeout(function(){
			orangeObject.element.classList.add("black");
		}, 500);
		// var note = document.getElementById('orange-note');
		orangeObject.sound.play();
		setTimeout(function(){
		    orangeObject.element.classList.remove("black");
		}, 1000);
		computerMoves.push(orangeObject);
	} else if (randomSelection === blueNotes[1]){
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		document.getElementById('green-note').play();
		setTimeout(function(){
			randomSelection.classList.remove("black");
		}, 1000);
		computerMoves.push(greenObject);
	} else if (randomSelection === blueNotes[2]){
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		document.getElementById('purple-note').play();
		setTimeout(function(){
			randomSelection.classList.remove("black");
		}, 1000);
		computerMoves.push(purpleObject);
	} else {
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		document.getElementById('brown-note').play();
		setTimeout(function(){
			randomSelection.classList.remove("black");
		}, 1000);
		computerMoves.push(brownObject);
	}
	console.log(computerMoves);
};
//STARTS THE GAMEPLAY:
startButton.addEventListener('click', startItUp);

//FUNCTION FOR USER SELECTION:
var lightItUp= function(event){
	if (event.target.classList.contains("orange") === true){
		setTimeout(function(){
			orangeNote.classList.add("black");
		}, 500);
		document.getElementById('orange-note').play();
		setTimeout(function(){
			orangeNote.classList.remove("black");
		}, 1000);
		playerMoves.push(orangeObject);
		console.log(playerMoves);
	} else if (event.target.classList.contains("green") === true){
		setTimeout(function(){
			greenNote.classList.add("black");
		}, 500);
		document.getElementById('green-note').play();
		setTimeout(function(){
			greenNote.classList.remove("black");
		}, 1000);
		playerMoves.push(greenObject);
		console.log(playerMoves);
	} else if (event.target.classList.contains("purple") === true){
		setTimeout(function(){
			purpleNote.classList.add("black");
		}, 500);
		document.getElementById('purple-note').play();
		setTimeout(function(){
			purpleNote.classList.remove("black");
		}, 1000);
		playerMoves.push(purpleObject);
		console.log(playerMoves);
	} else {			
		setTimeout(function(){
			brownNote.classList.add("black");
		}, 500);
		document.getElementById('brown-note').play();
		setTimeout(function(){
			brownNote.classList.remove("black");
		}, 1000);
		playerMoves.push(brownObject);
		console.log(playerMoves);
	} 
	//RESULTS OF USER SELECTION: 
	if ( doTheyMatch(computerMoves, playerMoves) ){
			score ++;
			playBack();
			// window.setTimeout(startItUp, 1500);
			window.setTimeout(displayScore, 1000);
	//GAME-OVER and RESET:
	} else {
		window.setTimeout(playAgain, 1000);
		resetButton.addEventListener('click', gameReset); 
	}
};

//ALLOWS USER TO CLICK ON BOXES and LOGS RESULT:
orangeNote.addEventListener('click', lightItUp);
greenNote.addEventListener('click', lightItUp);
purpleNote.addEventListener('click', lightItUp);
brownNote.addEventListener('click', lightItUp);

//POSTS IN-PROGRESS INSTRUCTIONS: 
var gameInstruction = function () {
	document.querySelector('.play-again').textContent='Click the right box to match Simon!';
};

//POSTS SCORE IF PLAYER WINS:
var displayScore = function (){
	document.querySelector('.score-counter').textContent='You win!  SCORE: ' + score;
};

//POSTS INSTRUCTIONS WHEN PLAYER LOSES"
var playAgain = function () {
	document.querySelector('.play-again').textContent='You lose! press RESET to continue';
};

//RESETS COUNTER, RESETS GAME:

var gameReset = function (){
	computerMoves = [];
	playerMoves = [];
	score = 0;
	document.querySelector('.play-again').textContent='PRESS start TO PLAY!';
	document.querySelector('.score-counter').textContent='SCORE: 0';
};

resetButton.addEventListener('click', gameReset);


// THIS FUNCTION COMPARES THE LENGTH AND CONTENT OF TWO ARRAYS AND RETURN A TRUE/FALSE VALUE 
// See STACK OVERFLOW: 
// http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript-or-jquery


var doTheyMatch = function (arr1, arr2){
	console.log("checking match...");
    if (arr1.length !== arr2.length) {
    	return false;
    }
    for (var i = 0, length = arr1.length; i < length; i++){
        if (arr1[i] !== arr2[i]){
        	console.log(arr1[i]);
        	console.log(arr2[i])
	    	console.log("they don't match");
            return false;
        }
    } 
    console.log("they match")
    return true;
};

//GAME IS MISSING FUNCTIONALITY FOR COMPUTER REPLAYING THE NOTES SELECTED IN PREVIOUS ROUNDS



var playBack = function () {
	console.log('PLAYBACK');
	for(var i = 1; i < computerMoves.length + 1; i++) {
		(function(index){
			setTimeout(function() {
				console.log(index);
				computerMoves[index-1].element.classList.add('black');
				setTimeout(function() {
					console.log('REMOVE BLACK');
					computerMoves[index-1].element.classList.remove('black');
				}, 2000);
				computerMoves[index-1].sound.play();
				console.log('COMPUTER MOVES LENGTH ', computerMoves.length);
				if(index === computerMoves.length) {
					setTimeout(function() {
						console.log('START IT UP TIMEOUT');
						startItUp();
					}, 2000);
				}
			}, 1500 * index);
		})(i);
	} 
	
	// window.setTimeout(startItUp, 1000);
	// startItUp();
	// for (var i = 0; i < computerMoves.length; i++) {
	// 	setTimeout(function(x) { return function() {
	// 		console.log('X ', x);
	// 		console.log('computerMoves[x] ', computerMoves[x]);
	// 		computerMoves[x].element.classList.add("black");
	// 	};
	// 	}(i), 2000*i);
	// 	setTimeout(function(x) { return function() {computerMoves[x].element.classList.remove("black")
	// 		computerMoves[x].sound.play();};
	// 	}(i), 3000*i);
	// };
	// startItUp();
	// if (num < computerMoves.length) {
	// 	time();
	// }
	// // window.clearTimeout(repeatPattern);
	// // time();
	// // if (num < computerMoves.length) {
	// // 	time();
	// // } else { 
	// // 	console.log('works');
	// // 	window.clearTimeout(repeatPattern);
	// // };
};

// var time = function () {
// 	num++;
// 	window.setTimeout(startItUp, 500);
// 	// num++;
// 	// console.log(num);
// 	// repeatPattern = window.setTimeout(playBack, 500);
// };

















