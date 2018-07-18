import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ imgUrl, name, price, alt, soldOut, children }) => (
  <div className="product">
    <p>{children}</p>
    <img className="product-image" src={imgUrl} alt={alt} />
    <h2 className="product-name">{name}</h2>
    <p className="product-price">Price: {price}$</p>
    <p>{soldOut ? 'Sold out' : 'Available'}</p>
    {soldOut && <button className="product-btn">Add to cart</button>}
  </div>
);

Product.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  soldOut: PropTypes.bool,
};

Product.defaultProps = {
  soldOut: false,
};

export default Product;
