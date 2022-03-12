var generateBtn = document.querySelector("#generate");

var passwordLength;
var lower;
var upper;
var numberSet;
var specialChar;
var userchoice;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", " >", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128");
console.log("Password length " + passwordLength);

if(!passwordLength) {
alert("Required value");
} 
else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
} 
else { 
    lower = confirm("Would you like lower case letters?");
    console.log("Lower case " + lower);
    upper = confirm("Would you like upper case letters?");
    console.log("Upper case " + upper);
    numberSet = confirm("Would you like numbers?");
    console.log("Number " + numberSet);
    specialChar = confirm("Would you like special characters?");
    console.log("Special Character " + specialChar);
};

if (!lower && !upper && !numberSet && !specialChar) {
    userchoice = alert("You must choose a criteria");
} 
else if (lower && upper && numberSet && specialChar) {
    userchoice = lowerCase.concat(upperCase, numbers, special);
    console.log(userchoice);
}
else if (lower && upper && numberSet) {
    userchoice = lowerCase.concat(upperCase, numbers);
    console.log(userchoice);
}
else if (lower && upper && specialChar) {
    userchoice = lowerCase.concat(upperCase, special);
    console.log(userchoice);
}
else if (lower && numberSet && specialChar) {
    userchoice = lowerCase.concat(numbers, special);
    console.log(userchoice);
}
else if (upper && numberSet && specialChar) {
    userchoice = upperCase.concat(numbers, special);
    console.log(userchoice);
}
else if (lower && upper) {
    userchoice = lowerCase.concat(upperCase);
    console.log(userchoice);
}
else if (lower && numberSet) {
    userchoice = lowerCase.concat(numbers);
    console.log(userchoice);
}
else if (lower && specialChar) {
    userchoice = lowerCase.concat(special);
    console.log(userchoice);
}
else if (upper && numberSet) {
    userchoice = upperCase.concat(numbers);
    console.log(userchoice);
}
else if (upper && specialChar) {
    userchoice = upperCase.concat(special);
    console.log(userchoice);
}
else if (numberSet && specialChar) {
    userchoice = numbers.concat(special);
    console.log(userchoice);
}
else if (lower) {
    userchoice = lowerCase;
    console.log(userchoice);
}
else if (upper) {
    userchoice = blankUpper.concat(upperCase);
    console.log(userchoice);
}
else if (numberSet) {
    userchoice = numbers;
    console.log(userchoice);
}
else if (specialChar) {
    userchoice = special;
    console.log(userchoice);
};

var passwordBlank = [];
for (var i = 0; i < passwordLength; i++) {
    var allChoices = userchoice[Math.floor(Math.random() * userchoice.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
}
var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;
}