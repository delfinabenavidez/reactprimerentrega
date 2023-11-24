import React from 'react';
import CartWidget from './cartwidget.jsx';

const Navbar = () => {
  const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Nombre de la Tienda
      </a>
      <ul className="navbar-nav mr-auto">
        {categories.map((category, index) => (
          <li key={index} className="nav-item">
            <a href="#" className="nav-link">
              {category}
            </a>
          </li>
        ))}
      </ul>
      <CartWidget itemCount={5} /> {cartItemCount/}
    </nav>
  );
};

export default Navbar;


