import React, { useState, useEffect } from 'react';
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
import { getDeliveryTime } from '../../assets/helperFunctions';

const ShopModule = ({ children, handleChange, searchedText, quotation }) => {
  const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    let date = getDeliveryTime();
    setDeliveryDate(date);
  }, []);

  console.log('quotation!', quotation);

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
        &ensp;Buy now and get it by <Span>{deliveryDate}</Span>
      </TimeBoard>
      <PricingBoard>
        <QuoteBoard>
          <Div dir='column'>
            <Div>
              <div>Products</div>
              <div>{quotation.productsCost.toFixed(2)}</div>
            </Div>
            <Div bg='marker' font='weight'>
              <div>Shipping Cost</div>
              <div>{quotation.shippingCost.toFixed(2)}</div>
            </Div>
            <Div>
              <div>Taxes</div>
              <div>{quotation.taxes.toFixed(2)}</div>
            </Div>
          </Div>
          <Div font='weight' style={{ margin: '0px 16px 16px 16px' }}>
            <div>Total</div>
            <Span color='red'>{quotation.totalCost.toFixed(2)}</Span>
          </Div>
        </QuoteBoard>
        <ButtonOrder>COMPLETE ORDER</ButtonOrder>
      </PricingBoard>
    </>
  );
};

export default ShopModule;
