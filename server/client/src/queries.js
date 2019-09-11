import { gql } from 'apollo-boost';

export const PRODUCTS = gql`
  query products {
    products {
      id
      name
      price
      stock
      picture
    }
  }
`;

export const GET_ORDER_CODE = gql`
  query getOrderCode {
    getOrderCode {
      code
    }
  }
`;
