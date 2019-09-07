import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import App from './App';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();