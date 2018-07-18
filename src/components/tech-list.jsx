import React from 'react';
import PropTypes from 'prop-types';

const TechList = ({ items }) => (
  <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
);

TechList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TechList;
