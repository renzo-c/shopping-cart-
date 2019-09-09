import React from 'react';
import {
  Row,
  Description,
  Image,
  Span,
  Name,
  Button,
  Cross,
  CounterControl,
  ButtonContainer
} from '../../theme/rowStyle';
import { IconSpan } from '../../theme/basicTags';

const productRow = ({ product, onClick, dull }) => {
  return (
    <>
      <Row dull={dull}>
        <Image alt='product' src={`/images/${product.picture}.png`} />
        <Description>
          <Name>{product.name}</Name>
          <Span type='price' color='red'>
            $ {product.price.toFixed(2)}
          </Span>
        </Description>
        <ButtonContainer>
          {!dull && (
            <Button onClick={e => onClick(e, product)}>
              {product.quantity ? (
                <IconSpan color='white'>{product.quantity}</IconSpan>
              ) : (
                <Cross />
              )}
            </Button>
          )}
          {product.quantity ? 'Delete' : null}
        </ButtonContainer>
      </Row>
      {dull && (
        <CounterControl>
          <button>-</button>
          counter
          <button>+</button>
        </CounterControl>
      )}
    </>
  );
};

export default productRow;
