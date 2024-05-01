// function delaration
// function expression

const manager = function (firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(manager("Shuhaque", "Purbasha"));

// function constructor
const doSome = new Function("a", "b", "return a * b");

console.log(doSome(10, 2));

// Selft invokng
// (function)();

(function(){
    let x = "Hello, world!";
})();

// arrow function

const arrow = (x, y) => x * y;

console.log(arrow(10, 2));

const arrow2 = (x, y) => {
    return x * y;
}


// functin rest parameters
function sum(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

let x = sum(10, 20, 40, 50, 60, 70, 80, 90, 100, 1000, 10000, 100000, 1000000, 100000000, 100000000, 100, 2, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,2, 10
);
console.log(x);


// find max

function max(...args) {
    let max = 0;
    for(let i = 0; i < args.length; i++) {
        if(args[i] > max) {
            max = args[i];
        }
    }
    return max;
}
let maximumNumber = max(10, 20, 40, 50, 60, 70,);
console.log(maximumNumber);