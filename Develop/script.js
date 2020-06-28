// Assignment Code
var generateBtn = document.querySelector('#generate');
//On button click
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
			console.log(bigArray);
		}
		if (upperCase) {
			passwordStr = passwordStr + letterUArray[Math.floor(Math.random() * letterUArray.length)];
      bigArray = bigArray + letterUArray;
      console.log(bigArray);
		}
		if (numbers) {
			// get 1 random charter from numbers
			passwordStr = passwordStr + numberArray[Math.floor(Math.random() * numberArray.length)];
			bigArray = bigArray + numberArray;
		}
		if (specials) {
			passwordStr = passwordStr + specialArray[Math.floor(Math.random() * specialArray.length)];
			bigArray = bigArray + specialArray;
		}

		//  total = getLength - password.length

		console.log(bigArray);
		console.log(passwordStr);

    var total = getLength - passwordStr.length
    for (var i = 0; i < total; i++) {
			passwordStr = passwordStr + bigArray[Math.floor(Math.random() * bigArray.length)];
    }
    console.log(passwordStr);
    return passwordStr
	}
};

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
	var passwordText = document.querySelector('#password');

//	passwordText();

  passwordText.value = password;
}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
