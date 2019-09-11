import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORDER_CODE } from '../../queries';
import {
  Container,
  ImageContainer,
  Div,
  TextContainer,
  Span
} from '../../theme/orderStyle';
import { Link } from '@reach/router';

const Order = () => {
  // const { loading, error, data } = useQuery(GET_ORDER_CODE);
  // if (loading) return <p>Loading ...</p>;
  // if (error) console.log('error!!!', error);
  // console.log(data);
  return (
    <Container>
      <TextContainer>
        <Div type='title'>Thank You</Div>
        <Div>
          Your order <Span>xxx</Span> has been registered
        </Div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Div>Continue shopping</Div>
        </Link>
      </TextContainer>
      <ImageContainer alt='confirmed-order' src='/images/success.png' />
    </Container>
  );
};

export default Order;
