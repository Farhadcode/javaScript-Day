// templet string uses 
const number = [1, 3, 5, 7, 9];
const student = {
    name: 'Famid',
    age: 22,
    depetment: 'IPE',
    friends: ['jobar', 'sifat', 'mithu', 'asrafi'],
    address: {
        location: 'Modubag',
        home: 'cumilla',
        houseNo: 1202,
    },
    id: 190107000,
}

const details = ` My name is ${student.name}.I am ${student.age} years olde. ${student.friends[1]} is my best friend in my university life`
console.log(details);

// arrow funtion

const isEven = x => x % 2 == 0;
const result = isEven(5);
console.log('this is event number', result);

/// single line arrow funtion

const mult = (x, y) => x * y;
console.log(mult(5, 8));

/// multi line arrow funtion

const doMath = (x, y) => {
    const sum = x + y;
    const multiply = sum * y;
    return multiply;
}

const mathResult = doMath(5, 8);
console.log(mathResult);


// spread operator uses
const newNumber = [...number, 77, 44, 33, 22];
console.log(newNumber.length);