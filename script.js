//grab the element id password
var password = document.getElementById("password");

//write code to generate the password
function generatePassword() {
    //array that contains all of the symbols that I need.
  var chars = ["!@#$%^&*()abcdefghijklmnopqrstuvwxuz1234567890ABCDEFGHIJKLMNOPQRSTUVQXYZ"];
  
  var passwordLength = 15;
  
  var password = "";
  

  for (var i = 0; i <= passwordLength; i++){
  password += chars.charAt(Math.floor(Math.random() * password.length + 1));
    
  };

  document.getElementById("password").value = password;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);