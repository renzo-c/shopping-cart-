import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'https://shopping-cart-rq.herokuapp.com/graphql',
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('graphQLErrors!!!', graphQLErrors);
    } else if (networkError) {
      console.log('networkError!!!', networkError);
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
