import React, { useState, useEffect } from 'react';
import {
  SearchBar,
  SearchList,
  PricingBoard,
  TimeBoard,
  QuoteBoard,
  Div
} from '../../theme/search';
import { ButtonOrder } from '../../theme/shopModuleStyle';
import { Span } from '../../theme/basicTags';
import { getDeliveryTime } from '../../assets/helperFunctions';
import { Link } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_STOCK, ADD_ORDER, ADD_PRODUCT_ORDER } from '../../mutations';

const ShopModule = ({
  children,
  handleChange,
  searchedText,
  quotation,
  handleClickOrder
}) => {
  const [deliveryDate, setDeliveryDate] = useState('');
  const [updateProduct] = useMutation(UPDATE_STOCK);
  const [addOrder] = useMutation(ADD_ORDER);
  const [addProductOrder] = useMutation(ADD_PRODUCT_ORDER);

  useEffect(() => {
    let date = getDeliveryTime();
    setDeliveryDate(date);
  }, []);
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
        <Link
          to='order-placed'
          onClick={e => {
            handleClickOrder(e, updateProduct, addProductOrder, addOrder);
          }}
          style={{ textDecoration: 'none' }}
        >
          <ButtonOrder price={quotation.totalCost}>COMPLETE ORDER</ButtonOrder>
        </Link>
      </PricingBoard>
    </>
  );
};

export default ShopModule;
