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
  ButtonContainer,
  CounterButton,
  CounterDisplay,
  MaxStockLabel
} from '../../theme/rowStyle';
import { IconSpan } from '../../theme/basicTags';

const productRow = ({
  product,
  onClickAddDelete,
  dull,
  onClickCounter,
  onChangeCounter,
  counter
}) => {
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
        <ButtonContainer stock={product.stock}>
          {!dull && (
            <Button onClick={e => onClickAddDelete(e, product)}>
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

      {counter && (
        <>
          <CounterControl>
            <CounterButton onClick={e => onClickCounter(e, 'min', product.id)}>
              <img alt='minus button' src='/images/minusIcon.png' />
            </CounterButton>
            <CounterDisplay
              type='number'
              value={product.quantity}
              onChange={e => onChangeCounter(e, product.id)}
            />
            <CounterButton onClick={e => onClickCounter(e, 'plus', product.id)}>
              <img alt='plus button' src='/images/plusIcon.png' />
            </CounterButton>
          </CounterControl>
          <MaxStockLabel>
            {product.quantity === product.stock
              ? `${product.stock} unidades disponibles`
              : null}
          </MaxStockLabel>
        </>
      )}
    </>
  );
};

export default productRow;
