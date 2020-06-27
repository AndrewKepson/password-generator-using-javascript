// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var specialCharacters = "!@#$%^&*()".split("");
  var digits = "1234567890".split("");

  var ri = (Math.floor(Math.random() * lowerCaseLetters.length);
  document.write(lowerCaseLetters[ri]);

  //On click, get writePassword 

  //For loop using variables from arrays above using writePassword.length()

  // for (var i = 0; i <writePassword.length; i++) {
  //      lowerCaseLetters.rand
  // }
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

