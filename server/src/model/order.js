import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const Order = new GraphQLObjectType({
  name: 'oder',
  description: 'this object represents an order',
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(order) {
          return order.id;
        }
      },
      code: {
        type: GraphQLString,
        resolve(order) {
          return order.code;
        }
      }
    };
  }
});

export default Order;
