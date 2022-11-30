const fibonacci = function(choice) {
    //generate fibonacci 
    fibonacciList = [];
    let current = 0;

    //clean input
    choice = parseInt(choice);

    //test validity
    if (choice < 1) return 'OOPS';

    for (let i=0; i<choice; i++){
        if (fibonacciList.length < 2){
            fibonacciList.push(1);
        } else {
        current = fibonacciList[fibonacciList.length-1]+ 
                  fibonacciList[fibonacciList.length-2];
        fibonacciList.push(current);
        }
    }
    return fibonacciList[fibonacciList.length-1]; 
};
// Do not edit below this line
module.exports = fibonacci;
