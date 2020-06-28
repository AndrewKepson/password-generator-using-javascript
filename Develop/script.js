// Assignment Code
var generateBtn = document.querySelector("#generate");
  //On button click
generateBtn.onclick = function getLength() {
    //Get the length of the password from user input
  var getLength = prompt("How many characters would you like your password to be? Pick a number between 8 and 128.");
  var numbers = confirm("Would you like to include numbers?");
  var specials = confirm("Would you like to include special characters?");
  console.log(getLength);
  console.log(numbers);
  console.log(specials);

if (getLength < 8 || getLength > 128) {
    alert("I'm sorry, please select a value between 8 & 128.");
  } else {
    var letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".split("");
  }
if (numbers = true) {
  var numbers = "1234567890".split("");
} else {
  var numbers = false;
}
if (specials = true) {
  var specials = "!@#$%^&*()".split("");
} else {
  var specials = false;
}
console.log(specials);
console.log(numbers);
console.log(letters);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
