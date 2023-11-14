function renderNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

    const brand = document.createElement('a');
    brand.classList.add('navbar-brand');
    brand.innerText = 'Nombre de la Tienda';
    navbar.appendChild(brand);

    const categoryList = document.createElement('ul');
    categoryList.classList.add('navbar-nav', 'mr-auto');

    const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');

        const link = document.createElement('a');
        link.classList.add('nav-link');
        link.href = '#';
        link.innerText = category;
        listItem.appendChild(link);

        categoryList.appendChild(listItem);
    });

    navbar.appendChild(categoryList);

    const cartWidget = document.createElement('div');
    cartWidget.classList.add('cart-widget', 'ml-auto');

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-shopping-cart');
    cartWidget.appendChild(icon);

    const notification = document.createElement('span');
    notification.classList.add('badge', 'badge-primary');
    notification.innerText = '5';
    cartWidget.appendChild(notification);

    navbar.appendChild(cartWidget);

    return navbar;
}
