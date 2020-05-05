
function add(num1 , num2){
return num1 + num2; 
}

function subtract(num1, num2) {
return num1 - num2;
}

function multiply (num1 , num2){
return num1 * num2;
}

function divide(num1 , num2) {
return num1 / num2;
}

function calulator(num1 , num2 , operator) {
return operator(num1, num2);
} 

let numb = calulator(3 , 5 ,multiply);
console.log(numb)
