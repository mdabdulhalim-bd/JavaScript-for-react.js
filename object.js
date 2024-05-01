// let car = "Hanif";
// console.log(car);

// {
//     const car = {
//         name: "Hanif",
//         model:"7373H",
//         weight: "73743",
//         color: "red"
//     }
//     console.log(car);
// }

{
    const person = {
        fNaame: "John",
        lName: "Doe",
        age: 20,
        weight: "65",
        eyeColor: "asset",
        address:"Dhaka, Mohammadpur, Bosila",
        contactNubmer:2132451245,
        hobbies:["football", "cricket", "basketball"],
        friends:["Rahim", "John", "Karim"],
        fullName: function () {
            return this.fNname + " " + this.lName;
        },
}

// console.log(person.eyeColor);
}


// function displayDate(){
//     return Date();
// }

// let currentDate = displayDate();
// console.log(currentDate);


// const person = {};
// const person2 = new Object();


for( let kdkd in person ) {
    console.log(person[kdkd]);
}