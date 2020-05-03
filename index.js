// this was the first challenge of bootcamp 
// to make the first letter of the name capital

function promt() {
    let name = prompt("what is ur name");
    let lengthName = name.lengthName
    let nameadd = name.slice(1, lengthName);
    let nameSlice = name.slice(0,1);
    let nameToUpper = nameSlice.toUpperCase();
    alert("hello" + " " + nameToUpper + nameadd)
}

// this was the second challenge of bootcamp
// To calculate the BMI by using the return and the property space


function bmiCaluculator(weight, height) {
    let bmi = weight/(height*height);
    return Math.round(bmi) ;
}

// let bmi5 = bmiCaluculator(65, 1.8);
// console.log(bmi5);

// chalenge third waiting.
// random generator 

let math = Math.random();
let mathall = Math.floor(math * 6) + 1; 
console.log(mathall)

//giving it to new branch
