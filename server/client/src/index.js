import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import App from './App';
import { gql } from "apollo-boost";

const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'https://shopping-cart-rq.herokuapp.com/graphql',
});

client
  .query({
    query: gql`
      {
        products {
          id
          name
          price
          stock
        }
      }
    `
  })
  .then(result => console.log(result));


ReactDOM.render(<App />, document.getElementById('root'));
