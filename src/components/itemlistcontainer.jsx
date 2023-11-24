import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p>{greeting}</p>
      {/* Aquí puedes agregar la lógica para renderizar la lista de productos */}
    </div>
  );
};

export default ItemListContainer;
