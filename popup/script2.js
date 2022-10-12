const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('copybtn');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}


generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

const length = +lengthEl.value;
const hasLower = lowercaseEl.checked;
const hasUpper = uppercaseEl.checked;
const hasNumber = numbersEl.checked;
const hasSymbol = symbolsEl.checked;
resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}

	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
//download
function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
// Start file download.
const textorhtml = document.getElementById("dowop");
	document.getElementById("btn-dow").addEventListener("click", function(event){
		event.preventDefault();
		if (textorhtml.style.display === "none") {
			textorhtml.style.display = "block";
			event.preventDefault();
		} else {
			textorhtml.style.display = "none";
			event.preventDefault();
		}
	});

function downloadnow(){
	if (resultEl.innerText == "") {
		console.error("Error. Try reloading this page and if it still has this error please open a issue at github. ERROR_CODE:Z103EXTENSION");
	}else {
		const forapp = "For: " + forapp1;
		const notes = "Note: " + notes1;
		const text = "Keep it Safe! This file is ONLY on your hard drive and should never leave it! \n------------------------------------------ \n" + forapp + "\nYour password: " + resultEl.innerText + "\n" + notes + "\n  _____   _____        ______ \n |  __  \ / ____|      |  ____|\n | |__) | |  __ ______| |__   \n |  ___/| | |_ |______|  __|  \n | |    | |__| |      | |____ \n |_|      \_____|      |______|\n                              \nCreated in PG-E.\nProvided by K+. \nAll rights reserved.";
	 if (opname == "") {
	 	const filename = Math.floor(Math.random() * 1000000000) + 1 + "-PG" + ".txt";
		download(filename, text);
		textorhtml.style.display = "none";
	 } else {
		 const filename = opname + ".txt";
 		download(filename, text);
 		textorhtml.style.display = "none";
	 }
}};
let deferredPrompt;
//download
var nexvaro = 1;
var nexvaroo = 1;
var nexvarooo = 1;
var forapp1;
var notes1;
var opname;
document.getElementById("nextbutton").addEventListener('click', () => {
	if (nexvarooo == 3) {
		notes1 = document.getElementById("inputt").value;
		document.getElementById("inputt").value = "";
		downloadnow();
		location.reload();
	};
	if (nexvaroo == 2) {
		forapp1 = document.getElementById("inputt").value;
		document.getElementById("inputt").value = "";
		nexvarooo = 3;
		document.getElementById("textt").innerHTML = "Extra Notes:";
		document.getElementById("nextbutton").innerHTML = "Download";
	};
	if (nexvaro == 1) {
		opname = document.getElementById("inputt").value; //filename
		document.getElementById("inputt").value = "";
		document.getElementById("textt").innerHTML = "For the Website/App:";
	  nexvaro = 2;
		nexvaroo = 2;
	};
});
//cancel
document.getElementById("cancelbtn").addEventListener('click', () => {
	console.log("start");
	nexvaro = 1;
	nexvaroo = 1;
	nexvarooo = 1;
	document.getElementById("inputt").value = "";
	document.getElementById("textt").innerHTML = "File name (optional):";
	document.getElementById("nextbutton").innerHTML = "Next";
	document.getElementById("dowop").style.display = "none";
	event.preventDefault();
});
//clipboard
clipboard.addEventListener('click', () =>{
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if (!password) {
      return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    document.getElementById('copybtn').innerHTML = 'Copied!';
		document.getElementById("copybtn").style.color = "#32e56f";
		setTimeout(function(){
    document.getElementById('copybtn').innerHTML = 'Copy';
		document.getElementById("copybtn").style.color = "#CBCBCB";
   	}, 3000)
});
//logo
console.info("  _____   _____        ______ \n |  __  \ / ____|      |  ____|\n | |__) | |  __ ______| |__   \n |  ___/| | |_ |______|  __|  \n | |    | |__| |      | |____ \n |_|      \_____|      |______|\n                              "
);
