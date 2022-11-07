const reverseString = function(string) {
    let returnedString = '';
    for (i=1;i<=string.length;i++){
        returnedString = returnedString + string[string.length-i];
    }
    return returnedString;
};

// Do not edit below this line
module.exports = reverseString;
