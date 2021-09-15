const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    /// add to local storage
    if (id && value) {
        localStorage.setItem(id, value);
    }

    /// clear input field

    idInput.value = '';
    valueInput.value = '';

}