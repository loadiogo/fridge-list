import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    cartItem: Model
  },

  seeds(server) {
    server.db.loadData({
      cartItems: [
        {
          id: 1,
          description: 'Farofa',
          amount: 1,
          isBought: false,
          createdAt: new Date(),
        },
        {
          id: 2,
          description: 'Toddy',
          amount: 1,
          isBought: false,
          createdAt: new Date(),
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/cartItems', (schema, request) => {
      return schema.all("cartItem");
    });

    this.post('/cartItems', (schema, request) => {
      const newCartItem = JSON.parse(request.requestBody);

      return schema.create('cartItem', newCartItem);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
