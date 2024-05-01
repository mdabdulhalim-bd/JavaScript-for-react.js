const numbers = [10, 20, 100];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y, z] = numbers;
// console.log(x, y, z);


// function addThreeNumber(num1, num2, num3) {
//     const numbers = [num1, num2,num3 ];
//     return numbers;
// }

// const threeNums = addThreeNumber(3, 3, 3);
// const [num1, num2,num3] = threeNums;

// console.log(num1, num2,num3);


const person = {
    name: 'kdkdk',
    age: 20,
    address: [
        'Dhaka',
        'Mohammadpur',
        'Bosila'
    ],
    eyeColor: 'asset',
    fullName: function () {
        return this.name + " " + this.age;
    },
    friends: [
        'Rahim',
        'John',
        'Karim'
    ],
    contactNubmer: 2132451245,
    hobbies: [
        'football',
        'cricket',
        'basketball'
    ],
    books: {
        name: 'karma',
        author: 'Abdul Halim',
        price: 200,
        pages: 200,
        publisher: {
            name: 'Makabaye Shamela',
            address: 'Dhaka, Mohammadpur, Bosila',
            phone: 2132451245,
            email: 'halim@gmail.com',
            website: 'www.makabaye.com',       
    }
    
}
}

const {name, friends, email} = person;
console.log(friends[0]);

// friends.forEach(name => {
//     console.log(name);
// });

console.log(person.books.publisher.email);