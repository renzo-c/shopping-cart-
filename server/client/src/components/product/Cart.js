import React from 'react';
import { Container, Title, Image, Description } from '../../theme/cartStyle';
import Row from './Row';

const Cart = ({ cartItems, onClickAddDelete }) => {
  if (!cartItems.length) {
    return (
      <Container>
        <Image alt='Empty Cart' src='/images/cartIcon.png' />
        <Title>Your cart is empty</Title>
        <Description>Seems like you haven't chosen what to buy...</Description>
      </Container>
    );
  } else {
    return (
      <>
        {cartItems.map((product, key) => {
          return (
            <Row
              dull={false}
              product={product}
              onClickAddDelete={onClickAddDelete}
              key={key}
            />
          );
        })}
      </>
    );
  }
};

export default Cart;
