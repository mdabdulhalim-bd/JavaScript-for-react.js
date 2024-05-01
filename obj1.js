// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     laguage: "Bangla",
//     fullName: function (){
//       return this.firstName + " " + this.lastName;
//     },
//     get lang(){
//         return this.laguage;
//     },
//   }

//   let name = person.fullName();
// //   console.log(name);
// //  toUperCase 

// const myArray = Object.values(person);
// console.log(person.lang);

const obj = {counter: 0};

Object.defineProperties(
    obj, 
    "reset",
    {
        get: function () {this.counter = 0;}
    }
    
);
Object.defineProperty(obj, "increment", {get: function () {this.counter++;}})
Object.defineProperty(obj, "decrement", {get: function () {this.counter--;}})