import React from 'react';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
