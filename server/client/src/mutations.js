import { gql } from 'apollo-boost';

export const UPDATE_STOCK = gql`
  mutation updateProduct($id: ID!, $stock: Int!) {
    updateProduct(id: $id, stock: $stock) {
      id
      stock
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder {
    addOrder {
      code
    }
  }
`;

export const ADD_PRODUCT_ORDER = gql`
  mutation addProductOrder($products: [ProductInputType!]!) {
    addProductOrder(products: $products) {
      code
    }
  }
`;
