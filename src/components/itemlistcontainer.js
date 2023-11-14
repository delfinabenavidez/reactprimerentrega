function renderItemListContainer(greeting) {
    const container = document.createElement('div');
    container.classList.add('item-list-container');

    const message = document.createElement('p');
    message.innerText = greeting;
    container.appendChild(message);

    return container;
}
