var number = ["0123456789"];
var uCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
var lCase = ["abcdefghijklmnopqrstuvwxyz"];
var sChar = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

var userPwd = [""];
var userPwdOptions = [""];
debugger;;

function getUserPwdOptions(){
    var pLengthPrompt = prompt("How long would you like your password to be?");
    var pLength = parseInt(pLengthPrompt);
    while (pLength < 8 || pLength > 128 || isNaN(pLength)) {
        alert("Sorry, please select a length between 8 and 128 characters");
        return; 
        };
    var pNumbers = confirm("Would you like to use numbers in your password?");
    var pUCase = confirm("Would you like to use uppercase characters in your password?");
    var pLCase = confirm("Would you like to use lowercase letters in your password?");
    var pSChar = confirm("Would you like to use special characters in your password?");
    if (pNumbers !== true && pUCase !== true && pLCase !== true && pSChar !== true){
        alert("Sorry, you have to select at least one option in order to generate a password. Try again.");
        }
    if (pNumbers === true){
            userPwdOptions = userPwdOptions + number;
    }
    if (pUCase === true){
            userPwdOptions = userPwdOptions + uCase;
        } 
    if (pLCase === true){
            userPwdOptions = userPwdOptions + lCase;
        } 
    if (pSChar === true){
            userPwdOptions = userPwdOptions + sChar;
        };
    for (i = 0; i < pLength; i++){
        userPwd += userPwdOptions[Math.floor(Math.random() * userPwdOptions.length)]
    };
    console.log(userPwd);   
}
