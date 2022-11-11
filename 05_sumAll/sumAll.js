const sumAll = function(int1,int2) {
    let result = 0;
    let floor = 0;
    let ceiling = 0;

    //verify that arguments are positive integers
    if ((int1<0||int2<0)||typeof(int1,int2)!='number'){
        return "ERROR";
    }

    //determine starting number
    if (int1 < int2){
        floor = int1;
        ceiling = int2;
    } else {
        floor = int2;
        ceiling = int1;
    }

    //sum all numbers between floor and ceiling, inclusive
    for(let i = floor; i <= ceiling; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
