//1 array destructuring 

const numbers = [42, 65];
//const x = numbers[0] ;
// const y = numbers[1] ;

//const [x, y] = [42, 65];
const [x, y] = numbers;
console.log(x, y);

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
// array destructuring
const [best1, best2] = student.friends;
console.log(best2);

// object destructuring

const { name, id, age } = student;
const { location, houseNo } = student.address;
console.log(name);
console.log(id);
console.log(location);



