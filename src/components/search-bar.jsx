import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <div>
    <p>Search by content</p>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export default SearchBar;
