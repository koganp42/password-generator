var number = ["0123456789"];
var uCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
var lCase = ["abcdefghijklmnopqrstuvwxyz"];
var sChar = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

var userPwd = [""];
var userPwdOptions = [""];


if (pLength < 8 || pLength > 128) {
    alert("Sorry, please select a length between 8 and 128 characters"); 
} else {

}
function generatePassword(){
    var pLengthPrompt = prompt("How long would you like your password to be? Note: password must be between 8 and 128 characters long.");
    var pNumbers = prompt("Would you like to use numbers in your password?");
    var pUCase = prompt("Would you like to use uppercase characters in your password?");
    var pLCase = prompt("Would you like to use lowercase letters in your password?");
    var pSChar = prompt("Would you like to use special characters in your password?");
    var pLength = parseInt(pLengthPrompt);

    //Maybe I should use a do/while loop instead?
    while (pNumbers !== false && pUCase !== false && pLCase !== false && pSChar !== false){
        if (pNumbers === true){
            userPwdOptions = userPwdOptions + pNumbers;
        } else if (pUCase === true){
            userPwdOptions = userPwdOptions + pUCase;
        } else if (pLCase === true){
            userPwdOptions = userPwdOptions + pLCase;
        } else if (pSChar === true){
            userPwdOptions = userPwdOptions + pSChar;
        } else {
            alert("Sorry, you have to select at least one option in order to generate a password. Try again.");
        };
    }
    if (pLength < 8 || pLength > 128) {
        alert("Sorry, please select a length between 8 and 128 characters"); 
    } else {
    
}


document.getElementById("generate").addEventListener("click", generatePassword);
function generatePassword(pLength, pNumbers, pUCase, pLCase, pSChar) {};