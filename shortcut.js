// falsey
// 0, null, false, undefined, NaN, -0, An empty string ""

const isLoggedIn = true;
if(!isLoggedIn) {
    console.log(`User logged in successfully`);
}
else{
    console.log(`User is not logged in`);
}

const user = isLoggedIn ? "sucessfully done" : "user is not valid";
console.log(`User ${user};`);


let log = isLoggedIn && "user is already logged in";
console.log(log);

let license = true
let motorByke = true;
let car = motorByke === true ? "License Ok" : "Not Owner";
console.log(car);

let isFood = Date.now();
let food = isFood === Date.now() ? "Have date" : "Date Expired";

console.log(food);


const value = 0;
if(value){
    console.log(`Value is true`);
}
else{
    console.log(`Value is false`);
}

// type conversion
const number = 12;
const num = "ka" + number;
console.log(num);