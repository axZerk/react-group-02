import React from 'react';
import passProps from './hoc/passProps';

const Dish = ({ name, price, available }) => (
  <div>
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <p>Available: {available ? <span>✅</span> : <span>❌</span>}</p>
  </div>
);

export default passProps({ name: 'Lobster', price: 200, available: false })(
  Dish,
);
