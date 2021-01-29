let frame = document.getElementById("frame");
let block = document.getElementById("block");
let theGenerateButton = document.getElementById("generate-b");
let theDeleteButton = document.getElementById("delete-b");

// USER INPUTS
let userInputBlColor = document.getElementById("select-color");
let userInputBgColor = document.getElementById("select-bg");




// GENERATE BUTTON
theGenerateButton.addEventListener("click", generateBlocks);
theGenerateButton.addEventListener("click", generateBackground);


// BACKGROUND GENERATOR
function generateBackground(e) {
	e.preventDefault();

	bg = [userInputBgColor.value];
	insertBg(bg);
};

//functions for background generator
function insertBg(bg) {
	let bgCount = bg.length;
	frame.style.background = bg[ranNum(bgCount)];
	frame.style.border = "0";
	console.log(ranNum(bgCount));
	console.log("number of backgrounds in array = " + bgCount);
};


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
	frame.style.border = "1px solid black";
	frame.style.background = "";
})




// randomNumberGenerator function
function ranNum(num) {
		return Math.floor(Math.random() * num);
	};