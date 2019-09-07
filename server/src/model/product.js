import {
  GraphQLObjectType,
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
      }
    };
  }
});

export default Product;
