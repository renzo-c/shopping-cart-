import React, { useState } from 'react';
import Row from './components/product/Row';
import Cart from './components/product/Cart';
import ShopModule from './components/product/ShopModule';
import { getQuotation } from './assets/helperFunctions';

const Home = props => {
  const [products] = useState(props.products);
  const [filteredList, setFilteredList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [shopping, setShopping] = useState({ isShopping: false, product: {} });
  const [searchedText, setSearchedText] = useState('');

  const handleChange = e => {
    setSearchedText(e.target.value);
    if (shopping.isShopping) {
      setShopping({ ...shopping, isShopping: false });
    }
    let str = e.target.value.toLowerCase().trim();
    if (str) {
      let newCartItems = products.filter(product =>
        product.name.toLowerCase().includes(str)
      );
      setFilteredList([...newCartItems]);
    } else {
      setShopping({});
      setFilteredList([]);
    }
  };

  const handleClickAddItem = (e, product) => {
    e.preventDefault();
    if (product.deletable) {
      let newCartItems = cartItems.filter(item => item.id !== product.id);
      setCartItems([...newCartItems]);
      setShopping({ isShopping: false, product: {} });
    } else {
      let newProduct = cartItems.filter(p => p.id === product.id)[0];
      if (newProduct === undefined) {
        newProduct = { ...product, quantity: 1, deletable: true };
        setCartItems([...cartItems, newProduct]);
        setSearchedText('');
      }
      setShopping({ isShopping: !shopping.isShopping, product: newProduct });
    }
  };

  const handleClickCounter = (e, op, prodId) => {
    e.preventDefault();
    let newcartItems = cartItems.filter(product => product.id !== prodId);
    let updatedProduct = cartItems.filter(product => product.id === prodId)[0];
    if (op === 'plus') {
      if (updatedProduct.quantity < updatedProduct.stock) {
        updatedProduct.quantity += 1;
      }
    } else {
      updatedProduct.quantity -= 1;
      if (updatedProduct.quantity === 0) {
        setShopping({ ...shopping, isShopping: false });
        setCartItems([...newcartItems]);
        return null;
      }
    }
    setCartItems([...newcartItems, updatedProduct]);
  };

  const onChangeCounter = (e, prodId) => {
    e.preventDefault();
    let newcartItems = cartItems.filter(product => product.id !== prodId);
    let updatedProduct = cartItems.filter(product => product.id === prodId)[0];
    updatedProduct.quantity = parseInt(e.target.value);
    setCartItems([...newcartItems, updatedProduct]);
  };

  const quotation = getQuotation(cartItems);

  console.log('cartItems', cartItems);
  if (!searchedText.trim().length && !shopping.isShopping) {
    return (
      <>
        <ShopModule
          handleChange={handleChange}
          searchedText={searchedText}
          quotation={quotation}
        >
          <Cart cartItems={cartItems} onClickAddDelete={handleClickAddItem} />
        </ShopModule>
      </>
    );
  } else if (searchedText.trim().length && !shopping.isShopping) {
    return (
      <>
        <ShopModule
          handleChange={handleChange}
          searchedText={searchedText}
          quotation={quotation}
        >
          {filteredList.map((product, key) => (
            <Row
              dull={false}
              product={product}
              onClickAddDelete={handleClickAddItem}
              key={key}
            />
          ))}
        </ShopModule>
      </>
    );
  } else if (shopping.isShopping) {
    return (
      <>
        <ShopModule
          handleChange={handleChange}
          searchedText={searchedText}
          quotation={quotation}
        >
          <>
            <Row
              product={shopping.product}
              dull={false}
              onClickAddDelete={handleClickAddItem}
              counter={true}
              onClickCounter={handleClickCounter}
              onChangeCounter={onChangeCounter}
            />
            {cartItems.map((product, key) => (
              <Row
                dull={true}
                product={product}
                onClickAddDelete={handleClickAddItem}
                key={key}
              />
            ))}
          </>
        </ShopModule>
      </>
    );
  }
};

export default Home;
