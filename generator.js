var number = ["0123456789"];
var uCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
var lCase = ["abcdefghijklmnopqrstuvwxyz"];
var sChar = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

var userPwd = [""];
//var userPwdOptions = [""];
// debugger;;
var generateClick = document.getElementById("generate").addEventListener("click", getUserPwdOptions);

function getUserPwdOptions(){
    var pLengthPrompt = prompt("How long would you like your password to be?");
    var pNumbers = confirm("Would you like to use numbers in your password?");
    var pUCase = confirm("Would you like to use uppercase characters in your password?");
    var pLCase = confirm("Would you like to use lowercase letters in your password?");
    var pSChar = confirm("Would you like to use special characters in your password?");
    var pLength = parseInt(pLengthPrompt);
    var userPwdOptions = [""];
    if (pNumbers !== false && pUCase !== false && pLCase !== false && pSChar !== false){
        alert("Sorry, you have to select at least one option in order to generate a password. Try again.");
        } else if (pNumbers === true){
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
    for (i = 8; i < pLength; i++){
        userPwd = userPwdOptions[Math.floor(Math.random() * userPwdOptions.length)]
    }
    console.log(userPwd);
    
}



// function pwdOptionsArray(pwdOptionsArray){
//     var pLengthPrompt = prompt("How long would you like your password to be? Note: password must be between 8 and 128 characters long.");
//     var pLength = parseInt(pLengthPrompt);

    //Maybe I should use a do/while loop instead?
    // if (pNumbers !== false && pUCase !== false && pLCase !== false && pSChar !== false){
    //     else if (pNumbers === true){
    //         userPwdOptions = userPwdOptions + pNumbers;
    //     } else if (pUCase === true){
    //         userPwdOptions = userPwdOptions + pUCase;
    //     } else if (pLCase === true){
    //         userPwdOptions = userPwdOptions + pLCase;
    //     } else if (pSChar === true){
    //         userPwdOptions = userPwdOptions + pSChar;
    //     } else {
    //         alert("Sorry, you have to select at least one option in order to generate a password. Try again.");
    //     };
    // };
    // if (pLength < 8 || pLength > 128) {
    //     alert("Sorry, please select a length between 8 and 128 characters"); 
    // };


//document.getElementById("generate").addEventListener("click", generatePassword); {}


