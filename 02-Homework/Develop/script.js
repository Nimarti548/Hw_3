// User input variables
let confirmLowercase;
let confirmUppercase;
let confirmCharacter;
let confirmNumber;
let choices;
let enter;

// Four choices for user password value
// lower case
let lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
// uppercase
let uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];
// character
let character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "`", "~", "_", "-", "|", "?", ">", "<", "{", ";", ":", "[", "]","}"];
// numbers
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Assignment Code
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  pw = generatePassword();
  document.getElementById("password").placeholder = pw;
});

// Start function to generate password
function generatePassword() {
  // Asks for user input
  let enter = parseInt(prompt("How many characters would you like your password to be? Choose any number from 8 to 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("Pick a Number Please.");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You're not good at following directions."));

  } else {
      // Continues once user input is validated
      confirmNumber = confirm("Would you like for it to contain numbers?");
      confirmCharacter = confirm("Would you like for it to contain special characters?");
      confirmUppercase = confirm("Would you like for it to contain Uppercase letters?");
      confirmLowercase = confirm("Would you like for it to contain Lowercase letters?");
  };

  // Else if for 4 negative options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("C'Mon man, you must choose a criteria!");

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = character.concat(nums, lCase, uCase);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(nums, uCase);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(nums, lCase);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(lCase, uCase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = nums.concat(lCase, uCase);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(nums);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(lCase);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(uCase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lCase.concat(nums);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lCase.concat(uCase);

  } else if (confirmNumber && confirmUppercase) {
      choices = nums.concat(uCase);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = nums;
  }
  else if (confirmLowercase) {
      choices = lCase;
  }
  else if (confirmUppercase) {
      choices = uCase;
  };



  
