// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max) {
   max = min
   min =0
  
  }
  var rand = Math.random() 
  return Math.floor(min*(1 - rand) + rand* max)
  
  
 //return Math.floor(Math.random()*(max -min))

}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

//write the funciton :generatepassword
function generatePassword () {
 
  const userInput = window.prompt("How long do you wanna your password to be?")
 
  const passwordLength = parseInt(userInput)

 if(isNaN(passwordLength)) {
  window.alert("That's not a number!")
  return 
 }

 if(passwordLength < 8 || passwordLength>128) {
  window.alert("Length of at least 8 characters and no more than 128 characters.")
  return
 }
 
 
  const usersNumber = window.confirm("Do you wanna include number in your password?")

  const usersSymbols = window.confirm("Do you wanna include symbols in your password?")
  
  const usersUppercase = window.confirm("Do you wanna include Uppercase in your password?")

  const userLowercase = confirm("Do you wanna include lowercase in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var symbolList = ["!", "@", "#", "$","%", "^", "&", "*", "+","=","?", "<", ">", "_","-", ]

  //var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

 var uppercaselist =[]

  var lowercaseList =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var optionschoice = [];

  for (var i = 0; i < lowercaseList.length; i++){
    uppercaselist[i] = lowercaseList[i].toUpperCase()
  }

  if (usersNumber === true){
    optionschoice.push(numberList)

  }

  if (usersSymbols === true){
    optionschoice.push(symbolList)

  }

  if (usersUppercase === true){
    optionschoice.push(uppercaselist)

  }

  if (userLowercase === true){
    optionschoice.push(lowercaseList)

  }

 if (optionschoice === 0) {
  optionschoice.push(lowercaseList)
  
 }
  

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomlist = getRandomItem(optionschoice) 
    var randomcharacter = getRandomItem(randomlist)
    generatedPassword += randomcharacter

  }
  
  return generatedPassword
  
}


 




 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
