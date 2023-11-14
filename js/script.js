document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbarContainer');
    navbarContainer.appendChild(renderNavbar());

    const itemListContainer = document.getElementById('itemListContainer');
    itemListContainer.appendChild(renderItemListContainer('¡Bienvenido a nuestra tienda!'));
});
