// 1 JSON data

const student = {
    name: 'Famid',
    age: 22,
    depetment: 'IPE',
    friends: ['jobair', 'sifat', 'mithu', 'asrafi'],
    address: {
        location: 'Modubag',
        home: 'cumilla',
        houseNo: 1202,
    },
    id: 190107000,
}

// object to JSON data === JSON.stringify(object)

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// JSON data to object  === JSON.parse(object)

const studentString = JSON.parse(studentJSON);
console.log(studentString);


// fetch basic structure
/*
fetch(url)
.then(response => response.json()) 
.then(data => console.log(data))
*/

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));

// keys ,values 

const keys = Object.keys(student);
const values = Object.values(student);

// loop of array 
// no return uses forEach()
const numbers = [76, 22, 24, 86, 95];
numbers.forEach(num => console.log(num));

// return uses map
numbers.map(num => {
    const mul = num * 5;
    console.log(mul);
})
// for-of on array like object
//loop on an object using  for-in 



const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 2800, brand: "rapoo" };

const newProducts = [...products, newProduct];

/// creat a new array without one specific item or
// remove phone means create a new array without the phone

const filteringProduct = products.filter(pd => pd.name !== 'phone');
console.log(filteringProduct);


