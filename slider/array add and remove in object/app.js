const data = {};

const addToData = item => {
    const data = getData();
    data[item] = 1;
    console.log(data);
}

const getData = () => {
    return data;
}