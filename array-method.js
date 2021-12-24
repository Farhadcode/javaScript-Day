const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// array.map convert to array

const brands = products.map(pd => pd.brand);
console.log(brands);


//forEach

// products.forEach(pd => console.log(pd));
products.forEach(pd => console.log(pd.price));

// // filter and  find

// const priceList = products.filter(pd => pd.price >= 3000);
const nameList = products.filter(pd => pd.name.includes('c'));
console.log(nameList);

// // find use

const nameList1 = products.find(pd => pd.name.includes('c'));
console.log(nameList1);