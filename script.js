// Assignment Code
var generateBtn = document.querySelector("#generate");
// Randomize function
const randomize = (str) => str.charAt(Math.floor(Math.random() * str.length));
// Write password to the #password input
var passwordText = document.querySelector("#password");
function generatePassword(length = 8, lower = true, upper = true, number = true, special = true) {
  var password = "";
  var lower = document.querySelector("#lowercase").checked;
  var upper = document.querySelector("#uppercase").checked;
  var number = document.querySelector("#numbers").checked;
  var special = document.querySelector("#special").checked;
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