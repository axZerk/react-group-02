import React from 'react';
import TogglableArticle from './togglable-article';

const List = ({ items }) => (
  <div>{items.map(item => <TogglableArticle key={item.id} {...item} />)}</div>
);

export default List;
