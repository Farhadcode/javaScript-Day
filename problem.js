function compareAge(a, b) {

    // converting to uppercase to have case-insensitive comparison
    // const name1 = a.name.toUpperCase();
    // const name2 = b.name.toUpperCase();

    // let comparison = 0;

    if (age <= 20 && age >= 30) {
        return a.age - b.age
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const students = [{ name: 'Sara', age: 24 }, { name: 'John', age: 24 }, { name: 'Jack', age: 25 }];

console.log(students.sort(compareName));