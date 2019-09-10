import { GraphQLObjectType, GraphQLID } from 'graphql';

const OrderResponse = new GraphQLObjectType({
  name: 'OrderResponse',
  description: 'This represents an OrderResponse',
  fields: () => {
    return {
      codeGenerated: {
        type: GraphQLID,
        resolve(orderResponse) {
          return orderResponse.code;
        }
      }
    };
  }
});

export default OrderResponse;
