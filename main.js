let frame = document.getElementById("frame");
let block = document.getElementById("block");
let theGenerateButton = document.getElementById("generate-b");
let theDeleteButton = document.getElementById("delete-b");

// USER INPUTS
let userInputBlColor = document.getElementById("select-color");



//POOLS
//background pool
let bg = [
	//"grey",
	"transparent",
	//"black",
	// "white",
	// "steelBlue", 
	// "red", 
	// "blue", 
	// "orange", 
	// "lime",
	// "white",
	// "pink",
	// "yellow",
	// "linear-gradient(to right, blue, steelBlue)",
	// "linear-gradient(to left, orange, yellow)",
	// "linear-gradient(to right, red, orange);"
];
let bgCount = bg.length;

// BLOCK POOL
let bl = [
	"transparent"	
];




// GENERATE BUTTON
theGenerateButton.addEventListener("click", generateBlocks);


// background generator
function ranNumBg() {
	return Math.floor(Math.random() * bgCount);
};

theGenerateButton.addEventListener("click", (e) => {
	e.preventDefault();
	frame.style.background = bg[ranNumBg()];
	console.log(ranNumBg());
	console.log("number of backgrounds in array = " + bgCount);
	frame.style.border = "0";
});



// BLOCK GENERATOR
function generateBlocks(e) {
	e.preventDefault();

	bl = [
		userInputBlColor.value,
		"transparent"
	];
	insertBlocks(bl);
};

//functions for block generator
function insertBlocks(bl) {
	let blCount = bl.length;

	frame.innerHTML = "";
	let numOfBlocks = 1024;
	let count = 1;
	while (count <= numOfBlocks) {
		frame.insertAdjacentHTML("beforeend", `
			<div class="block" style="background: ${bl[ranNum(blCount)]}"></div>
		`)
		count++;
	};
	console.log(ranNum(blCount));
	console.log("num of block styles in array = " + blCount);
};


// DELETE BUTTON
theDeleteButton.addEventListener("click", (e) => {
	e.preventDefault();
	
	frame.innerHTML = "";
	frame.style.border = "1px solid black"
})




// randomNumberGenerator function
function ranNum(num) {
		return Math.floor(Math.random() * num);
	};