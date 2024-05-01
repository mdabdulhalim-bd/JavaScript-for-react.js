const products = [
    { name: "Laptop", price: 999, brand: "Apple" },
    { name: "Smartphone", price: 799, brand: "Samsung" },
    { name: "Headphones", price: 149, brand: "Sony" },
    { name: "Camera", price: 599, brand: "Canon" },
    { name: "Smartwatch", price: 299, brand: "Fitbit" },
  ];
  
//   console.log(products);
  
  // Convert objects to the json format
  const jsonProducts = JSON.stringify(products);
//   console.log(jsonProducts);

  // Convert json format to objects
  const parsedProducts = JSON.parse(jsonProducts);
//   console.log(parsedProducts);


  // add new properties to the object and create new object;
  const newProduct = {
    name: "karma",
    price: 199,
    brand: "Sony",
  };

  const newProducts = [...products, newProduct];
//   console.log(newProducts);


  // create object without Apple
  const withoutApple = products.filter((product) => product.brand!== "Apple");
//   console.log(withoutApple);


// fetch('url')
// .then(res =>res.json())
//  .then(data => console.log(data))


const keys = Object.keys(products);
console.log(keys);

const values = Object.values(products);
console.log(values);