function renderCartWidget() {
    const cartWidget = document.createElement('div');
    cartWidget.classList.add('cart-widget');

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-shopping-cart'); // Asumiendo el uso de Font Awesome para el ícono del carrito
    cartWidget.appendChild(icon);

    const notification = document.createElement('span');
    notification.classList.add('badge', 'badge-primary');
    notification.innerText = '5'; // Cantidad hardcodeada, se actualizará dinámicamente
    cartWidget.appendChild(notification);

    return cartWidget;
}
