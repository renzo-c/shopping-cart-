import React, { useState } from 'react';
import Row from './components/product/Row';
import Cart from './components/product/Cart';
import ShopModule from './components/product/ShopModule';

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
    if (product.deletable) {
      let newList = cartItems.filter(item => item.id !== product.id);
      setCartItems([...newList]);
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

  console.log('shopping', shopping);
  console.log('cartItems', cartItems);

  if (!searchedText.trim().length && !shopping.isShopping) {
    console.log('cart');
    return (
      <>
        <ShopModule handleChange={handleChange} searchedText={searchedText}>
          <Cart cartItems={cartItems} onClick={handleClickAddItem} />
        </ShopModule>
      </>
    );
  } else if (searchedText.trim().length && !shopping.isShopping) {
    return (
      <>
        <ShopModule handleChange={handleChange} searchedText={searchedText}>
          {filteredList.map((product, key) => (
            <Row
              dull={false}
              product={product}
              onClick={handleClickAddItem}
              key={key}
            />
          ))}
        </ShopModule>
      </>
    );
  } else if (shopping.isShopping) {
    return (
      <>
        <ShopModule handleChange={handleChange} searchedText={searchedText}>
          <>
            <Row
              product={shopping.product}
              dull={false}
              onClick={handleClickAddItem}
            />
            {filteredList.map((product, key) => (
              <Row
                dull={true}
                product={product}
                onClick={handleClickAddItem}
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
