console.log("Start it up, lads!")

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
		var randomSelection = blueNotes[Math.floor(Math.random()*blueNotes.length)];
			randomSelection.classList.add('on');
			randomSelection.style.backgroundColor = "blue"
		// console.log(randomSelection);
		//math.random * Notes.index math.floor
		//math.floor(Math.random)*blueNotes.length
	
	} else if (event.target.classList.contains("orange") === true){
		console.log("ORANGE LIT");
	} else if (event.target.classList.contains("green") === true){
		console.log("GREEN LIT");
	} else if (event.target.classList.contains("purple") === true){
		console.log("PURPLE LIT");
	} else {
		console.log("BROWN LIT");
	}
};

startButton.addEventListener('click', lightUp);



orangeNote.addEventListener('click', lightUp);
greenNote.addEventListener('click', lightUp);
purpleNote.addEventListener('click', lightUp);
brownNote.addEventListener('click', lightUp);