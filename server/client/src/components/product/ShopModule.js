import React from 'react';
import {
  SearchBar,
  SearchList,
  PricingBoard,
  TimeBoard,
  ButtonOrder,
  QuoteBoard,
  Div
} from '../../theme/search';
import { Span } from '../../theme/basicTags';

const ShopModule = ({ children, handleChange, searchedText }) => {
  return (
    <>
      <SearchBar
        placeholder='Search Products'
        onChange={handleChange}
        value={searchedText}
      />
      <SearchList>{children}</SearchList>
      <TimeBoard>
        <img alt='product' src='/images/deliveryIcon.png' />
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

export default ShopModule;
