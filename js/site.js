//get out user input
function getValue() {

    //turn result page invisible
    document.getElementById('results-div').classList.add("invisible");


    //get user string from the page
    let userString = document.getElementById('userString').value;

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);

    //display our message to the screen
    displayMessage(returnObj);

}

//check if string is a palindrome
function checkForPalindrome(userString) {
    
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regx = /[^a-z0-9]/gi;
    userString = userString.replace(regx, "");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index]; 
    }

    if (revString === userString) {
        returnObj.msg = "Well done! You entered a Palindrome"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome"
    }

    returnObj.reversed = revString;

    return returnObj;

}

//desplay a message to the screen
function displayMessage(returnObj) {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    //turn result div visible
    document.getElementById('results-div').classList.remove("invisible");

}