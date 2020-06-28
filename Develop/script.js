// Assignment Code
var generateBtn = document.querySelector('#generate');

//Function to generate password based on user input
function generatePassword() {
	//Get the length of the password from user input
	var getLength = prompt('How many characters would you like your password to be? Pick a number between 8 and 128.');

	//Validate user entry length and reset page if conditions are not met
	if (getLength < 8 || getLength > 128) {
		alert("I'm sorry, please select a value between 8 & 128.");
		location.reload();
	} else {
		var lowerCase = confirm('Would you like to include lower case letters?');
		var upperCase = confirm('Would you like to include uppercase letters?');
		var numbers = confirm('Would you like to include numbers?');
		var specials = confirm('Would you like to include special characters?');
		var passwordStr = '';
		var letterLArray = 'abcdefghijklmnopqrstuvwxyz';
		var letterUArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var numberArray = '0123456789';
		var specialArray = '!@#$%^&*()';
		var bigArray = '';
		//Decide which character strings to add to final output
		if (lowerCase) {
			passwordStr = passwordStr + letterLArray[Math.floor(Math.random() * letterLArray.length)];
			bigArray = bigArray + letterLArray;
		}
		if (upperCase) {
			passwordStr = passwordStr + letterUArray[Math.floor(Math.random() * letterUArray.length)];
			bigArray = bigArray + letterUArray;
		}
		if (numbers) {
			passwordStr = passwordStr + numberArray[Math.floor(Math.random() * numberArray.length)];
			bigArray = bigArray + numberArray;
		}
		if (specials) {
			passwordStr = passwordStr + specialArray[Math.floor(Math.random() * specialArray.length)];
			bigArray = bigArray + specialArray;
		}
		//Loop through array of all possible characters and return a randomized output meeting the length of the user's input
		var total = getLength - passwordStr.length;
		for (var i = 0; i < total; i++) {
			passwordStr = passwordStr + bigArray[Math.floor(Math.random() * bigArray.length)];
		}
		return passwordStr;
	}
}

//Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Copy Password to Clipboard

function copyPassword() {
	var copyPass = document.querySelector('#password');

	copyPass.select();
	document.execCommand('copy');
}

document.querySelector('#copyButton').addEventListener('click', copyPassword);
