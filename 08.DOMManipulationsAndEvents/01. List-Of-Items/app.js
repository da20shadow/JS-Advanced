function addItem() {
    let input = document.getElementById('newItemText').value;
    let listItems = document.getElementById('items');

    let newItem = document.createElement('li');
        newItem.textContent = input;

    listItems.appendChild(newItem);
}