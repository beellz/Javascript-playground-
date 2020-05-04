// so we are here for the fibonacci code challenge


function fiboGen(n) {

    var output = []; 
    if (n === 1) {
        console.log("fibo is 0")
        output = [0];
    }
    else if (n === 2) {
        console.log("fibe is 1")
        output = [0, 1];
    }
    else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {

            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

console.log(output);
return output;
}
fiboGen(250);
// console.log(output);