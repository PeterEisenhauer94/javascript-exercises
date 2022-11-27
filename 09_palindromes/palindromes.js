const palindromes = function (string) {
    
    //clean the string
    string = string.replace(/[.,\/#!$%\^&\*;:{}\s=\-_`~()]/g,"");
    string = string.toLowerCase();

    //convert string to array
    let ptest = string.split("");
    let result= [];
    for (i in string){
        result.push(ptest.pop());
    }
    //test if palindrome
    
    let test = function(string,result){
        for (let i=0; i<string.length;i++){
            if (string[i]!==result[i])
            return false;
        }
        return true;
    }
    test(string,result);

   //return result
   return test(string,result);
};
// Do not edit below this line
module.exports = palindromes;
