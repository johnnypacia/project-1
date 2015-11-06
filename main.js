console.log("Start it up, lads!")

var startButton;
var orangeNote;
var greenNote;
var purpleNote;
var brownNote;

var computerMoves = [];

// document.body.style.backgroundImage = "url('bassmanBackground.jpg')"
	var startButton = document.querySelector('#btn');
	var orangeNote = document.querySelector('.orange');
	var greenNote = document.querySelector('.green');
	var purpleNote = document.querySelector('.purple');
	var brownNote = document.querySelector('.brown');  

	var lightUp = function (event){
		if (event.target.id === "btn"){
			//Computer to randomly select on of the boxes:
			var blueNotes = [orangeNote, greenNote, purpleNote, brownNote];
			var randomIndex = Math.floor(Math.random()*blueNotes.length);
			var randomSelection = blueNotes[randomIndex];
				setTimeout(function(){randomSelection.classList.add("black");}, 500);
				setTimeout(function(){randomSelection.classList.remove("black");}, 1000);
				computerMoves.push(randomIndex);
				console.log(computerMoves);
				// randomSelection.style.backgroundColor = "blue";
				console.log(randomSelection);
		} else if (event.target.classList.contains("orange") === true){
			console.log("ORANGE LIT");
			setTimeout(function(){
				orangeNote.classList.add("black");
			}, 500);
			setTimeout(function(){
				orangeNote.classList.remove("black");
			}, 1000);
		} else if (event.target.classList.contains("green") === true){
			console.log("GREEN LIT");
			setTimeout(function(){
				greenNote.classList.add("black");
			}, 500);
			setTimeout(function(){greenNote.classList.remove("black");}, 1000);
		} else if (event.target.classList.contains("purple") === true){
			console.log("PURPLE LIT");
			setTimeout(function(){
				purpleNote.classList.add("black");
			}, 500);
			setTimeout(function(){
				purpleNote.classList.remove("black");
			}, 1000);
		} else {
			console.log("BROWN LIT");
			setTimeout(function(){
				brownNote.classList.add("black");
			}, 500);
			setTimeout(function(){brownNote.classList.remove("black");}, 1000);
		}
	};

startButton.addEventListener('click', lightUp);
orangeNote.addEventListener('click', lightUp);
greenNote.addEventListener('click', lightUp);
purpleNote.addEventListener('click', lightUp);
brownNote.addEventListener('click', lightUp);



