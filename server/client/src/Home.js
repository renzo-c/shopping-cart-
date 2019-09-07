import React from 'react';
import {SearchBar, SearchList} from './theme/search';

const Home = () => {
  return (
    <>
      <SearchBar placeholder="Search Products"/>
      <SearchList>
      </SearchList>
    </>
  );
}

export default Home;