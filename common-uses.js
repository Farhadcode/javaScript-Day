// falsey value
// ''  ,0 , false , null , undefiend

// truethy value
// 'name' ,5 ,true ,{} ,[]


// posetive or truthy checking
/*
let myNumber = 5;
if (myNumber) {
    myNumber = myNumber * 10;
}
else {
    myNumber = 0
}
// negative or falsy value checking
let myMoney = 500;
if (!myMoney) {
    console.log('negative value');
} else {
    console.log('posite value');
}

// ternary operator uese

let food = myMoney > 100 ? 'biryani kahbo' : 'tk poisha nai shigara khabo'
console.log(food);

let drink = (myMoney > 400 && myNumber > 4) ? 'Hot drink khabo' : 'coke is best';
console.log(drink); */

// String to Number

const input = '7426';
const inputNum = +input;
console.log(inputNum);

const input1 = 645;
const inputStr = input1 + '';

console.log(inputStr);
console.log(typeof (inputStr));