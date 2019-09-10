import { GraphQLObjectType, GraphQLString } from 'graphql';

const OrderResponse = new GraphQLObjectType({
  name: 'OrderResponse',
  description: 'This represents an OrderResponse',
  fields: () => {
    return {
      codeGenerated: {
        type: GraphQLString,
        resolve(orderResponse) {
          return orderResponse.code;
        }
      }
    };
  }
});

export default OrderResponse;
