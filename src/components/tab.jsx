import React from 'react';

const Tab = ({ img, descr }) => (
  <div>
    <img src={img} alt="" width={200} />
    <p>{descr}</p>
  </div>
);

export default Tab;
