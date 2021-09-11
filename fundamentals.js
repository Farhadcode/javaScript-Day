// let and  const

const fatherName = 'Kalam';
let productPrice = 445;
productPrice = 550;
console.log(productPrice);

//basic condition > ,< ,===,!== ,<= ,>=
// multiple conditions : &&, ||

if (fatherName === 'kalam' || productPrice === 450) {
    console.log(" ami ai product kinbo");
}
if (fatherName === "Kalam" && productPrice === 550) {
    console.log('ami na kinlay k kinbo ai product');
}
else {
    console.log("taka poisha nai ,so product kinbo na");
}

// array 
// array moday kon value na  pao galy index = -1

const numberArray = [77, 99, 33, 62, 56, 38, 22];
const result = numberArray.length;
const result1 = numberArray.indexOf(62);
const result2 = numberArray.push(8893);
const result3 = numberArray.includes(22);
numberArray[0] = 11,
    console.log(result);
console.log(result1);
console.log(result3);
console.log(numberArray);

//nested Array 
/*
In JavaScript, arrays can be nested. This means that an array can have another array as an element. Array nesting can go to any depth. 
*/

const value = [2, 4, 6, 8, 10, [1, 5, 7], 12];

console.log(value[5][2]);

// for loop 
for (let i = 0; i < numberArray.length; i++) {
    const element = numberArray[i];
    //console.log(element);

}

// total sum of  a arry useing for loop
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];

}
console.log(sum);


/// function 

function value(x, y) {
    const sum = x + y;
    return sum;
}
const result = value(5, 8);
console.log(result);

// arrow function 
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


// object 

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

console.log(student.friends[1]);
console.log(student.address.location);
