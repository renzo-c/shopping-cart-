import React, { useState } from 'react';
import {
  SearchBar,
  SearchList,
  Span,
  PricingBoard,
  TimeBoard,
  ButtonOrder,
  QuoteBoard,
  Div
} from './theme/search';
import Row from './components/product/Row';

const Home = props => {
  const [products] = useState(props.products);
  const [filteredList, setFilteredList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [shopping, setShopping] = useState({});

  const handleChange = e => {
    let str = e.target.value.toLowerCase().trim();
    if (str) {
      let newList = products.filter(product =>
        product.name.toLowerCase().includes(str)
      );
      setFilteredList([...newList]);
    } else {
      setShopping({});
      setFilteredList([]);
    }
  };

  const handleClickAddItem = (e, product) => {
    e.preventDefault();
    if (shopping.isShopping) {
      console.log('ready to delete');
    } else {
      if (cartItems.filter(p => p.id === product.id).length === 0) {
        let newProduct = { ...product };
        newProduct['quantity'] = 1;
        setCartItems([...cartItems, newProduct]);
        setShopping({ isShopping: true, product });
      }
    }
  };
  console.log(shopping);
  return (
    <>
      <SearchBar placeholder='Search Products' onChange={handleChange} />
      <SearchList>
        {!shopping.isShopping ? (
          filteredList.map((product, key) => (
            <Row
              dull={false}
              product={product}
              onClick={handleClickAddItem}
              key={key}
            />
          ))
        ) : (
          <>
            <Row
              product={shopping.product}
              dull={false}
              onClick={handleClickAddItem}
            />
            <Row product={shopping.product} dull={true} />
          </>
        )}
      </SearchList>
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
            <Div bg='marker' font='weight'>
              <div>Shipping Cost</div>
              <div>23.00</div>
            </Div>
            <Div>
              <div>Taxes</div>
              <div>23.00</div>
            </Div>
          </Div>
          <Div font='weight' style={{ margin: '0px 16px 16px 16px' }}>
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
