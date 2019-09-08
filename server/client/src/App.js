import React from 'react';
import Home from './Home';
import GlobalStyle from './theme/globalStyle';
import { PRODUCTS } from './components/product/queries';
import { useQuery } from '@apollo/react-hooks';

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
        <Home products={data.products}/>
      </>
    );
  }
};

export default App;
