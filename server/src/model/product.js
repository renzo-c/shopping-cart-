import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt
} from 'graphql';

const Product = new GraphQLObjectType({
  name: 'product',
  description: 'this object represents a product',
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(product) {
          return product.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(product) {
          return product.name;
        }
      },
      price: {
        type: GraphQLFloat,
        resolve(product) {
          return product.price;
        }
      },
      stock: {
        type: GraphQLInt,
        resolve(product) {
          return product.stock;
        }
      },
      picture: {
        type: GraphQLString,
        resolve(product) {
          return product.picture;
        }
      }
    };
  }
});

export const ProductInputType = new GraphQLInputObjectType({
  name: 'ProductInputType',
  description: 'this object represents a ProductInputType',
  fields: () => {
    return {
      id: {
        type: GraphQLID
      },
      name: {
        type: GraphQLString
      },
      price: {
        type: GraphQLFloat
      },
      quantity: {
        type: GraphQLInt
      }
    };
  }
});

export default Product;
