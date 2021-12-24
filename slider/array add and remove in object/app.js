
// add data in a DataBaise

const addToData = item => {
    const data = getData();
    if (item in data) {
        data[item] += 1;
    }
    else {
        data[item] = 1;
    }
    console.log(data);
    saveToLocalDb(data);
}

// remove data in a DataBaise

const removeFromData = (item) => {
    const data = getData();
    delete data[item];
    saveToLocalDb(data)
}

const saveToLocalDb = data => {
    localStorage.setItem('shopping-cart', JSON.stringify(data));
}

const getData = () => {
    // return data;
    // const data = {};
    let savedDb = localStorage.getItem('shopping-cart');
    // if (savedDb) {
    //     savedDb = JSON.parse(savedDb);
        
    // }
    // else{
    //     savedDb ={}
    // }
    return savedDb ? JSON.parse(savedDb) : {} ;
}