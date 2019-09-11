import React from 'react';
import { GET_ORDER_CODE } from '../../queries';
import {
  Container,
  ImageContainer,
  Div,
  TextContainer,
  Span
} from '../../theme/orderStyle';
import { Link } from '@reach/router';
import { graphql } from 'react-apollo';

const Order = ({ data }) => {
  const { loading, error, getOrderCode } = data;
  if (loading) return <p>Loading ...</p>;
  if (error) console.log('error!!!', error);
  return (
    <Container>
      <TextContainer>
        <Div type='title'>Thank You</Div>
        <Div>
          Your order <Span>{getOrderCode.code}</Span> has been registered
        </Div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Div>Continue shopping</Div>
        </Link>
      </TextContainer>
      <ImageContainer alt='confirmed-order' src='/images/success.png' />
    </Container>
  );
};

export default graphql(GET_ORDER_CODE, {
  options: { fetchPolicy: 'network-only' }
})(Order);
