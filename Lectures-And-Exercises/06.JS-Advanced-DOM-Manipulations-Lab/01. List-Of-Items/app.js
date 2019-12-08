function addItem() {
    const input = document.getElementById('newItemText');
    const list = document.getElementById('items');

    let text = input.value;
    const li = document.createElement('li');
    li.innerHTML = text;

    list.appendChild(li);
    input.value = '';
}