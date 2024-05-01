const student = {
    name: 'Rafiul Karim',
    age: 20,
    2024: "2024 Eng",
    'full-name': 'Rafiul d',
    address: [
        'Dhaka',
        'Mohammadpur',
        'Bosila'],
    class:'Eight',
    email: 'fdld@gmail.com',
}
// Bracket notation
const stn = student[2024];
console.log(stn);

const stn2 = student["full-name"];
console.log(stn2);

// Dot notation
const stn3 = student.address;
console.log(stn3);

stn3.forEach(el => {
    console.log(el);
});

