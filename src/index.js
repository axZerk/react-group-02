import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import Storage from './components/render-props/storage';

ReactDOM.render(
  <Storage>
    {storage => <App title="React Patterns" storage={storage} />}
  </Storage>,
  document.getElementById('root'),
);
