import React, { useState } from 'react';
import {
  SearchBar,
  SearchList,
  Row,
  Description,
  Image,
  Price,
  Name,
  Button
} from './theme/search';

const Home = props => {
  const [products] = useState(props.products);
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = e => {
    let str = e.target.value.toLowerCase().trim();
    if (str) {
      let newList = products.filter(product =>
        product.name.toLowerCase().includes(str)
      );
      setFilteredList([...newList]);
    } else {
      setFilteredList([]);
    }
  };
  return (
    <>
      <SearchBar placeholder='Search Products' onChange={handleChange} />
      <SearchList>
        {filteredList.map((product, key) => (
          <Row key={key}>
            <Image alt='product' src={`/images/${product.picture}.png`} />
            <Description>
              <Name>{product.name}</Name>
              <Price>$ {product.price.toFixed(2)}</Price>
            </Description>
            <Button>Hello</Button>
          </Row>
        ))}
      </SearchList>
    </>
  );
};

export default Home;
