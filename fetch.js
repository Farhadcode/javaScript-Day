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