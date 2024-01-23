// Assignment Code
var generateBtn = document.querySelector("#generate");
// Randomize function
const randomize = (str) => str.charAt(Math.floor(Math.random() * str.length));
// Write password to the #password input
var passwordText = document.querySelector("#password");
function generatePassword(length = 8, lower = true, upper = true, number = true, special = true) {
  var password = "";
  var lower = prompt("Would you like to include lowercase letters? (yes/no)").toLowerCase() === "yes";
  var upper = prompt("Would you like to include uppercase letters? (yes/no)").toLowerCase() === "yes";
  var number = prompt("Would you like to include numbers? (yes/no)").toLowerCase() === "yes";
  var special = prompt("Would you like to include special characters? (yes/no)").toLowerCase() === "yes";
  var length = prompt("How long would you like your password to be? (8-128 characters)");
  
  length = parseInt(length);
  
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  }
  
  if (!lower && !upper && !number && !special) {
    alert("Please select at least one character type");
    return;
  }
var characterSets = [
  { set: "abcdefghijklmnopqrstuvwxyz", condition: lower },
  { set: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", condition: upper },
  { set: "0123456789", condition: number },
  { set: "!@#$%^&*()_+~`|}{[]:;?><,./-=", condition: special },
]
  var allowed = "";
  for (let i = 0; i < characterSets.length; i++) {
    if (characterSets[i].condition) {
      allowed += characterSets[i].set;
    }
  }
  
  for  (let i = 0; i < length; i++) {
    password += randomize(allowed);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  passwordText.value = generatePassword();
});