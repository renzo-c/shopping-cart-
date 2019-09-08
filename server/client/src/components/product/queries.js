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
