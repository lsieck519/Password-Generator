
// Assignment code here

//Global Arrays

var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['~','!','@','#','$','%','^','&','*','?','=','+','<','>','/','[',']','{','}']


//Function to custom generate

function generatePassword() {
 
var possibleCharacters = [];

// Prompts and alerts to obtain and confirm preferences 

passwordLength = prompt("How many characters do you want in your password? Choose between 8-128 characters.","16");
if (passwordLength < 8 || passwordLength > 128) {
  return "Please enter a whole number between 8 and 128.";
} else if (isNaN(passwordLength)) {
  passwordLength = prompt("Please enter a valid whole number between 8 and 128");
}
else {
  alert("Your password will be " + passwordLength + " characters long.");
}

hasLowercase = confirm("Do you want lowercase characters? Select OK for YES or select Cancel for NO");
if (hasLowercase) {
  alert("Your secure password will include at least one lowercase character.");
}
else {
  alert("Your password will NOT have any lowercase characters.");
}

hasUppercase = confirm("Do you want uppercase characters? Select OK for YES or select Cancel for NO");
if (hasUppercase) {
  alert("Your secure password will include at least one uppercase character.");
}
else {
  alert("Your password will NOT have any uppercase characters.");
}

hasNumbers = confirm("Do you want to use numbers? Select OK for YES or select Cancel for NO");
if (hasNumbers) {
  alert("Your secure password will include at least one number");
}
else {
  alert("Your password will NOT have any numbers.");
}

hasSpecial = confirm("Do you want special characters Select OK for YES or select Cancel for NO");
if (hasSpecial) {
  alert("Your password will include at least one special character.");
}
else {
  alert("Your password will NOT have any special characters.");
}

if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
  return "Unable to generate password without characters. Please select at least one character type.";
};

// Combine selected characters type into one variable called possibleCharacters

if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseLetters);
}
if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaseLetters);
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (hasSpecial) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
}

// Use math objects to randomize selected characters into a variable called securePassword at the correct length 

let securePassword = ""
for (let i = 0; i < passwordLength; i++) {
  let rndm =[Math.floor(Math.random() * possibleCharacters.length)];
  securePassword = securePassword + possibleCharacters[rndm];
}

return securePassword;
};


// Function to auto generate secure password without customization (includes all character types)

function generatePassword2() {

var secureCharacters = [];
secureCharacters = secureCharacters.concat(numbers, lowercaseLetters, uppercaseLetters, specialCharacters);
secureLength = 81

let securePassword2 = ""
for (let i = 0; i < secureLength; i++) {
  let rndm2 =[Math.floor(Math.random() * secureLength)];
  securePassword2 = securePassword2 + secureCharacters[rndm2];
}

return securePassword2;
};


// References to the #generate #generate2 elements
var generateBtn = document.querySelector("#generate");

var generateBtn2 = document.querySelector("#generate2");

// Write custom password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  event.preventDefault()
}

// Write auto password to #password input 

function writePassword2() {
  var password = generatePassword2();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  event.preventDefault()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn2.addEventListener("click", writePassword2);


















