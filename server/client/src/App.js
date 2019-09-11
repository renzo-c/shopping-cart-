import React from 'react';
import Home from './Home';
import GlobalStyle from './theme/globalStyle';
import { PRODUCTS } from './queries';
import { Router } from '@reach/router';
import Order from './components/order';
import { graphql } from 'react-apollo';

const App = ({ data }) => {
  let { products, loading, error } = data;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (products) {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Order path='order-placed' />
          <Home path='/' products={products} />
        </Router>
      </>
    );
  }
};

export default graphql(PRODUCTS, {
  options: { fetchPolicy: 'network-only' }
})(App);
