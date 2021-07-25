// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//pasword object initialization
var password= {
  length:null,
  lowerCase: null,
  upperCase:null,
  numbers: null,
  symbols: null,
  passwordGen:null
}

//generate random characters based on user input 
function randomCharGenerator (lowerCase, upperCase, numUse, symbolUse){
var noChosenNumber = true;
  
var randomNumber = 0;

  while (noChosenNumber) {

    randomNumber = Math.floor(Math.random() * 95) + 32;

    if (lowerCase && randomNumber >= 97 && randomNumber <= 122) {

      return String.fromCharCode(randomNumber);

    } else if (upperCase && randomNumber >= 65 && randomNumber <= 90) {
      
      return String.fromCharCode(randomNumber);

    } else if (numUse && randomNumber >= 48 && randomNumber <= 57) {

      return String.fromCharCode(randomNumber);

    } else if (symbolUse && ((randomNumber >= 32 && randomNumber <= 47)||(randomNumber >= 58 && randomNumber <= 64)||(randomNumber >= 91 && randomNumber <= 96)||(randomNumber >= 123 && randomNumber <= 126))){
      
      return String.fromCharCode(randomNumber);

    } else {

      noChosenNumber = true;

    }
  }
}

//generate password for user 
function generatePassword(passwordLength,lowerCase, upperCase, numUse, symbolUse){
  var passwordNew="";
  for (var i = 0; i < passwordLength; i++) {
    passwordNew += randomCharGenerator(lowerCase, upperCase, numUse, symbolUse);
  }
  password.passwordGen=passwordNew;
}
  

//determine criteria of password based on user input 
function promptCriteria(){
  var useLowerCase = false;
  var useUpperCase = false;
  var useNumbers = false;
  var useSymbols = false;
  var validate = true;

  while (validate){
    var useLowerCase = window.confirm("Would you like to use lowercase letters in your password?");
    var useUpperCase = window.confirm("Would you like to use uppercase letters in your password?");
    var useNumbers= window.confirm("Would you like to use numbers in your password?");
    var useSymbols = window.confirm("Would you like to use symbols in your password?");
  
    if (useLowerCase==false && useUpperCase==false && useNumbers==false && useSymbols==false){
      window.prompt("You must select at least one of the character types to be used in your password !!! Please try again !!")
    }else {
      validate = false;
    }
  }

  password.lowerCase=useLowerCase;
  password.upperCase=useUpperCase;
  password.numbers=useNumbers;
  password.symbols=useSymbols;
}

//determine length of password based on user input
function lengthPassword(){
  var usePasswordLength = 0;
  var validate = true;

  while (validate){
    var usePasswordLength = window.prompt("Please enter the desired character length of your password from 8 to 128 characters");
    
    usePasswordLength=parseInt(usePasswordLength);

    if (usePasswordLength > 7 && usePasswordLength < 129){
      validate = false;
    }else {
      window.confirm("You must enter a value between 8 to 128 for your character length !!! Please try again !!")
    }
  }

  password.length = usePasswordLength;
}

//write password to the #password input
function writePassword() {

  lengthPassword();
  promptCriteria();
  generatePassword(password.length,password.lowerCase,password.upperCase,password.numbers,password.symbols);
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password.passwordGen;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
