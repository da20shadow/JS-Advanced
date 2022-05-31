function addItem() {
    let items = document.querySelector('#items');
    let input = document.querySelector('#newItemText');

    
    let li = document.createElement('li');
    li.textContent = input.value.trim() === '' ? 'Empty' : input.value;

    input.value = '';

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click',function (e){
        e.currentTarget.parentNode.remove();
    })
    li.appendChild(deleteBtn);
    items.appendChild(li);
}