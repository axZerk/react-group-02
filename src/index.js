import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './redux/store';
import './index.css';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>,
    root,
  );
}

// type Product = {
//   id: number,
//   name: string,
// };

// const products: Array<Product> = [
//   { id: 1, name: 'Apples' },
//   { id: 2, name: 'Grapes' },
//   { id: 3, name: 'Pork' },
// ];

// console.log(products);
