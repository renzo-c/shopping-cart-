import React from 'react';
import Home from './Home';
import GlobalStyle from './theme/globalStyle';
import { PRODUCTS } from './queries';
import { useQuery } from '@apollo/react-hooks';
import { Router } from '@reach/router';
import Order from './components/order';

const App = () => {
  const { data, loading, error } = useQuery(PRODUCTS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log('error!', error);
    return <div>Error</div>;
  }
  if (data) {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Order path='order-placed' />
          <Home path='/' products={data.products} />
        </Router>
      </>
    );
  }
};

export default App;
