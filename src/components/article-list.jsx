import React from 'react';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ id, title }) => (
      <li key={id}>{title}</li>
    ))}
  </ul>
);

export default ArticleList;
