import { gql } from 'apollo-boost';

export const UPDATE_STOCK = gql`
  mutation updateProduct($id: ID!, $stock: Int!) {
    updateProduct(id: $id, stock: $stock) {
      id
      stock
    }
  }
`;

export const GENERATE_ORDER = gql`
  mutation generateOrder($products: [Product]!) {
    generateOrder($products: products) {
      codeGenerated
    }
  }
`;
