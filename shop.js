const products = [
    { id: "P01", name: "notebook", price: 3500, stock: 10 },
    { id: "P02", name: "pen", price: 500, stock: 25 },
    { id: "P03", name: "Folder", price: 1200, stock: 0 },
    { id: "P04", name: "Marker", price: 1500, stock: 4 }
];

// 1. Find the product with ID
const product = products.find(product => product.id === "P01");

console.log("Product found:");
console.log(product);


// 2. Filter products with stock greater than 0
const availableProducts = products.filter(product => product.stock > 0);

console.log("Available products:");
console.log(availableProducts);


// 3. Calculate the total value of products in stock
const totalValue = product.price * product.stock;

console.log("Total value of notebook stock:");
console.log(totalValue + " RWF");


// 4. Check quantity
const quantity = 3;

if (quantity > 0 && Number.isInteger(quantity)) {
    console.log("Valid quantity");
} else {
    console.log("Invalid quantity");
}


// 5. Check stock
if (quantity <= product.stock) {
    console.log("Enough stock");
} else {
    console.log("Not enough stock");
}
