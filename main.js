let frame = document.getElementById("frame");
let block = document.getElementById("block");
let theGenerateButton = document.getElementById("generate-b");
let theDeleteButton = document.getElementById("delete-b");
let theCycleButton = document.querySelector("#cycle-b");
let plusOptionButtons = document.querySelector(".add-option-button");
let statusOfLoop = false;
let loop;

// USER INPUTS
let userInputNumber = document.querySelector("#select-number");
let colorSelection = document.querySelector("#color-selection");
let userInputBlShape = document.getElementById("shape-selection");
let userInputBlColor = document.getElementById("select-color");
let userInputBgColor = document.getElementById("select-bg");

// ADD MORE SELECTIONS
plusOptionButtons.addEventListener("click", createExtraOption);

//functions for clicking "extra option" button
function createExtraOption(e) {
	e.preventDefault();

	colorSelection.insertAdjacentHTML("beforeend", `
		<select>
			${userInputBlColor.innerHTML}
		</select>
		`);
};


// GENERATE & CYCLE BUTTON
theGenerateButton.addEventListener("click", generate);
theGenerateButton.addEventListener('keydown', executeShrt);
theCycleButton.addEventListener("click", cycleToggle);



function cycleToggle(e) {
	e.preventDefault();

	if (!statusOfLoop) {
		loop = setInterval(execute, 500);
		statusOfLoop = true;
		theCycleButton.innerHTML = "Stop the loop"
	} else {
		clearInterval(loop);
		statusOfLoop = false;
		theCycleButton.innerHTML = "Start loop"
		clearFrame();
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

// EXECUTE FUNCTION
function execute() {
	generateBlocks();	
	generateBackground();
};


// BACKGROUND GENERATOR
function generateBackground() {

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

	bl = [
		colorSelection.children[0].value,
		"transparent"
	];

	if (colorSelection.children[1]) {
		bl.push(colorSelection.children[1].value)	
	}
	if (colorSelection.children[2]) {
		bl.push(colorSelection.children[2].value)	
	}
	insertBlocks(bl);
};

//functions for block generator
function insertBlocks(bl) {
	let blCount = bl.length;

	frame.innerHTML = "";

	let oneSideCount = parseInt(userInputNumber.value);

	if (oneSideCount <= 0 && oneSideCount >= 600) {
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


// DELETE BUTTON
theDeleteButton.addEventListener("click", (e) => {
	e.preventDefault();
	clearFrame(); 
});
	

function clearFrame() {	
	frame.innerHTML = "";
	frame.style.border = "1px solid black";
	frame.style.background = "";
}




// randomNumberGenerator function
function ranNum(num) {
		return Math.floor(Math.random() * num);
	};