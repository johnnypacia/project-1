console.log("Start it up, lads!");


var startButton = document.querySelector('#btn');
var orangeNote = document.querySelector('.orange');
var greenNote = document.querySelector('.green');
var purpleNote = document.querySelector('.purple');
var brownNote = document.querySelector('.brown');  
var computerMoves = [];
var playerMoves = [];

var startItUp = function(event){
	if (event.target.id === "btn"){
		//Computer to randomly select one of the boxes:
	var blueNotes = [orangeNote, greenNote, purpleNote, brownNote];
	var randomIndex = Math.floor(Math.random()*blueNotes.length);
	var randomSelection = blueNotes[randomIndex];
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		setTimeout(function(){
			randomSelection.classList.remove("black");
		}, 1000);
	computerMoves.push(randomIndex);
	console.log(computerMoves);
	}
}

startButton.addEventListener('click', startItUp);

var lightItUp= function(event){
	if (event.target.classList.contains("orange") === true){
		setTimeout(function(){
			orangeNote.classList.add("black");
		}, 500);
			document.getElementById('orange-note').play();
		setTimeout(function(){
			orangeNote.classList.remove("black");
		}, 1000);
		playerMoves.push(0);
		console.log(playerMoves);
	} else if (event.target.classList.contains("green") === true){
		setTimeout(function(){
			greenNote.classList.add("black");
		}, 500);
			document.getElementById('green-note').play();
		setTimeout(function(){
			greenNote.classList.remove("black");
		}, 1000);
		playerMoves.push(1);
		console.log(playerMoves);
	} else if (event.target.classList.contains("purple") === true){
		setTimeout(function(){
			purpleNote.classList.add("black");
		}, 500);
			document.getElementById('purple-note').play();
		setTimeout(function(){
			purpleNote.classList.remove("black");
		}, 1000);
		playerMoves.push(2);
		console.log(playerMoves);
	} else {			
		setTimeout(function(){
			brownNote.classList.add("black");
		}, 500);
		document.getElementById('brown-note').play();
		setTimeout(function(){
			brownNote.classList.remove("black");
		}, 1000);
		playerMoves.push(3);
		console.log(playerMoves);
	}
}

orangeNote.addEventListener('click', lightItUp);
greenNote.addEventListener('click', lightItUp);
purpleNote.addEventListener('click', lightItUp);
brownNote.addEventListener('click', lightItUp);


//STACK OVERFLOW: 
//http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript-or-jquery

var doTheyMatch=function (arr1, arr2){
	    if (computerMoves.length !== playerMoves.length) {
	    	return false;
	    }
	    for (var i = 0, length = computerMoves.length; i < length; i++){
	        if (computerMoves[i] !== playerMoves[i]){
	            return false;
	        }
	    } return true; 
	}

// var noTheyDont = function (){
//  if (doTheyMatch == false) {
// window.alert('ADFJAKSJDF');
// }}


// var killScreen = document.querySelector('#play-again');


// var playAgain = function () {
// 	if (doTheyMatch === false) {
// 	document.querySelector('#play-again');
// 	document.createElement('h1');
// 	killScreen.textContent('Press START to play again!');
// 	document.body.appendChild(playAgain);
// }
// }



