console.log(`Welcome to the array of objects`);

const products = [
    { name: "Laptop", price: 999, brand: "Apple" },
    { name: "Smartphone", price: 799, brand: "Samsung" },
    { name: "Headphones", price: 149, brand: "Sony" },
    { name: "Camera", price: 599, brand: "Canon" },
    { name: "Smartwatch", price: 299, brand: "Fitbit" },
    { name: "Tablet", price: 499, brand: "Microsoft" },
    { name: "Gaming Console", price: 399, brand: "Sony" },
    { name: "Printer", price: 199, brand: "HP" },
    { name: "External Hard Drive", price: 129, brand: "Seagate" },
    { name: "Wireless Router", price: 79, brand: "TP-Link" }
  ];
  
//  const names = products.map(product =>{
//     return product.name  + " = " + product.brand;
//  });
//  console.log(names);

  // find();
  // filter();
  // map();
  // forEach();


//   const letters = ["a", "b", "c", "d", "e", "f"];
//   letters.forEach((letter) => console.log(letter));

  // filter
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenNumbers = numbers.filter((number) => number % 2 === 0);
//   console.log(evenNumbers);


//   const special = products.find((product) =>product.name.includes('e'));
//   console.log(special);
const prices =  products.filter(product => product.price <= 100);
console.log(prices);
prices.push('Islamic');
console.log(prices);


