// // Block scope
//     // 1. can't be redeclared


// // global scope
// let student = "age" ;
// console.log(student);

// let name = "Jhon";
// console.log(name);

// let x = 10;
// console.log(x);

// {
//     let x = 12;
//     console.log(x);
// }

// // document.getElementById("demo").innerHTML = x;

// // Hositing
// carName = "test";
// let carName;
// console.log(carName);


// Const
// const PI = 3.14;
// console.log(PI);

// const car;
// car = 'kdkdk'

// const students = ['Rahak', 'Karim', 'Halim'];
// students[0] = "Abdul Halim";
// console.log(students);

// students.push("Ibrahim");
// console.log(students);

// students = ['a', 'b', 'c'];
// console.log(students);


// let number    = 2;
// number **= 3;
// console.log(number);


// let x = 10;
// let y = 5;
// let z = x /y;
// console.log(z);

// let x = 5;
// console.log(x);
// ++x;
// console.log(x);


// {
//     let x = 2;
//     let z = Math.pow(x, 2);
//     console.log("Exponentail : ",z);
// }

// {
//     let x = 300;
//     x |= 5;
//     console.log(x);
// }


// {
//     let x = {};
//     console.log(typeof x);
// }


// Function
function addTwoNumbers(x, y) {
    return x + y;
}

const result = addTwoNumbers(1, 2);
console.log(result);


function carStoreRoom(name) {
    return name;
}

let carName = carStoreRoom("volbo");
console.log(carName);

function mulNumber(n1, n2) {
   
    return n1 * n2 ;
}
let mulResult = mulNumber(10, 2);
console.log(mulResult);
