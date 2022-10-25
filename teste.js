function processData(input) {
    //Enter your code here
    var inputs = input.split('\n');
    var arrayToSum = inputs[1].split(' ');
    var sum = 0;
    
    for (var i = 0; i < arrayToSum.length; i++) {
        sum += parseInt(arrayToSum[i], 10);       
        
    }
}
    console.log(sum)