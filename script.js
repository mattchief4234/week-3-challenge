var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
var numbersChar = ["1234567890"]
var specialChar = ["!@#$%^&*()-_"]


var megaArray = []

//grab the element id password
var password = document.getElementById("password");

//write code to generate the password
function generatePassword() {
  
  //cahnge to choose an number. cant be too big a number, and if its not a number then ask for a number agian.
var passwordLength = prompt("how many characters do you want in your password? Please choose a number between 8 - 128.")
console.log(passwordLength)
  if (passwordLength < 8) {
    alert("please imput a value that is more than 8 or less than 128!")
    generatePassword()
  }
  if (passwordLength >128) {
    alert("Please input a value that is more than 8 or less than 128!")
    generatePassword()
  }
var upperCaseOpt = confirm("Do you want uppercase characteres?")
console.log(upperCaseOpt)

var lowerCaseOpt = confirm("Do you want case lowercase characteres?")
console.log(lowerCaseOpt)

var numericOpt = confirm("Do you want numbers?")
console.log(numericOpt)

var specialOpt = confirm("Do you want special characteres?")
console.log(specialOpt)

if (upperCaseOpt) {
  // console.log("yes I want that!!")
  // console.log(megaArray, "megaArray")
  megaArray = megaArray + uppercase
  console.log(megaArray)
}
if (lowerCaseOpt) {
  megaArray = megaArray + lowercase
  console.log(megaArray)
}
if (numericOpt) {
  megaArray = megaArray + numbersChar
  console.log(megaArray)
}
if (specialOpt) {
  megaArray = megaArray + specialChar
  console.log(megaArray)
}

  //   array that contains all of the symbols that I need.
  // var chars = "!@#$%^&*()abcdefghijklmnopqrstuvwxuz1234567890ABCDEFGHIJKLMNOPQRSTUVQXYZ".split("");
  
  // var passwordLength = 15;
  
   var password = "";
  

  for (var i = 0; i <= passwordLength; i++){
   
   password = password + megaArray[Math.floor(Math.random() * megaArray.length)];
    
  };

  // document.getElementById("password").value = password;
return password
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log("write password box open")
  passwordText.value = password;
  
}
// writePassword()
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//read about math.random