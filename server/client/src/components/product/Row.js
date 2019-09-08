import React from 'react';
import {
  Row,
  Description,
  Image,
  Span,
  Name,
  Button,
  Cross
} from '../../theme/search';

const productRow = ({ product, onClick, dull }) => {
  console.log("product.quantity", product.quantity);
  return (
    <Row dull={dull}>
      <Image alt='product' src={`/images/${product.picture}.png`} />
      <Description>
        <Name>{product.name}</Name>
        <Span type='price' color='red'>
          $ {product.price.toFixed(2)}
        </Span>
      </Description>
      {!dull && (
        <Button onClick={e => onClick(e, product)}>
          {product.quantity ? product.quantity : <Cross />}
        </Button>
      )}
    </Row>
  );
};

export default productRow;
