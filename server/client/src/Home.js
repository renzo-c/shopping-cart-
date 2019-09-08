import React, { useState } from 'react';
import {
  SearchBar,
  SearchList,
  Row,
  Description,
  Image,
  Span,
  Name,
  Button,
  Cross,
  PricingBoard,
  TimeBoard,
  ButtonOrder,
  QuoteBoard,
  Div
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
              <Span type='price' color='red'>$ {product.price.toFixed(2)}</Span>
            </Description>
            <Button>
              <Cross />
            </Button>
          </Row>
        ))}
      </SearchList>
      {/* dullcomponent */}
      <TimeBoard>
        <img alt='product' src='/images/icon.png' />
        &ensp;Buy now and get it by <Span>05/24/2019</Span>
      </TimeBoard>
      <PricingBoard>
        <QuoteBoard>
          <Div dir='column'>
            <Div>
              <div>Products</div>
              <div>23.00</div>
            </Div>
            <Div bg='marker' font="weight">
              <div>Shipping Cost</div>
              <div>23.00</div>
            </Div>
            <Div>
              <div>Taxes</div>
              <div>23.00</div>
            </Div>
          </Div>
          <Div font='weight' style={{margin:'0px 16px 16px 16px'}}>
            <div>Total</div>
            <Span color='red'>23.00</Span>
          </Div>
        </QuoteBoard>
        <ButtonOrder>COMPLETE ORDER</ButtonOrder>
      </PricingBoard>
    </>
  );
};

export default Home;
