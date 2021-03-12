// CONSTRUCTOR
let frame = document.getElementById("frame");
let block = document.getElementById("block");
let theGenerateButton = document.getElementById("generate-b");
let theDeleteButton = document.getElementById("delete-b");
let theCycleButton = document.querySelector("#cycle-b");
let plusOptionButtons = document.querySelector(".add-option-button");
let statusOfLoop = false;
let loop;
// User inputs
let userInputNumber = document.querySelector("#select-number");
let colorSelection = document.querySelector("#color-selection");
let userInputBlShape = document.getElementById("shape-selection");
let userInputBlColor = document.getElementById("select-color");
let userInputBgColor = document.getElementById("select-bg");

// EVENT LISTENERS
plusOptionButtons.addEventListener("click", createExtraOption);
// Generate and cycle buttons
theGenerateButton.addEventListener("click", generate);
theGenerateButton.addEventListener('keydown', executeShrt);
theCycleButton.addEventListener("click", cycleToggle);
// Delete Button
theDeleteButton.addEventListener("click", (e) => {
	e.preventDefault();
	clearFrame(); 
});


// FUNCTIONS
function createExtraOption(e) {
	e.preventDefault();

	if (colorSelection.children.length <= 6) {
		colorSelection.insertAdjacentHTML("beforeend", `
			<select>${userInputBlColor.innerHTML}</select>
		`);
	} else {
		console.error("limit of fields exceeded");
	};
};

// Cycle toggle
function cycleToggle(e) {
	e.preventDefault();

	if (!statusOfLoop) {
		execute();
		loop = setInterval(execute, 750);
		statusOfLoop = true;
		theCycleButton.innerHTML = "Stop the loop";
	} else {
		clearInterval(loop);
		statusOfLoop = false;
		theCycleButton.innerHTML = "Start loop";
	};
};

function executeShrt(e) {
	e.preventDefault();

	if (e.key == "g") {
		generateBlocks();
		generateBackground();
	}
}

function generate(e) {
	e.preventDefault();
	execute();
};


// BG generator
function generateBackground() {
	bg = [userInputBgColor.value];
	insertBg(bg);
};

function insertBg(bg) {
	let bgCount = bg.length;
	frame.style.background = bg[ranNum(bgCount)];
	frame.style.border = "0";
	console.log(ranNum(bgCount));
	console.log("number of backgrounds in array = " + bgCount);
};

// Block generator
function generateBlocks(e) {
	bl = ["transparent"];

	let x = 1;
	while (colorSelection.children.length >= x) {
		bl.push(colorSelection.children[x - 1].value);
		x++;
	};
	insertBlocks(bl);
};

function insertBlocks(bl) {
	let blCount = bl.length;

	frame.innerHTML = "";

	let oneSideCount = parseInt(userInputNumber.value);

	if (oneSideCount <= 0 || oneSideCount >= 600) {
		oneSideCount = 2;
		alert("Choose number above '0' and below 600")
	};
	
	let numOfBlocks = oneSideCount * oneSideCount;
	frame.style.gridTemplateColumns = `repeat(${oneSideCount}, 1fr)`;
	frame.style.gridTemplateRows = `repeat(${oneSideCount}, 1fr)`;
	
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


// Execute
function execute() {
	generateBlocks();	
	generateBackground();
};

// Clear Frame
function clearFrame() {	
	frame.innerHTML = "";
	frame.style.border = "1px solid black";
	frame.style.background = "";
};

// randomNumberGenerator
function ranNum(num) {
		return Math.floor(Math.random() * num);
	};