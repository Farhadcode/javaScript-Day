

const numebrArray = [7, 8, 9, 10, 6,];
//const sum = (newValue, peviousValue) => newValue + peviousValue;

const result = numebrArray.reduce((peviousValue, currentValue) => (peviousValue + currentValue), 5);
console.log(result);

