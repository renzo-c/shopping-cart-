import { GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql';
import Product from '../model/product';
import Order from '../model/order';
import Db from '../conn/db';

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: () => {
    return {
      products: {
        type: new GraphQLList(Product),
        args: {
          id: { type: GraphQLID }
        },
        resolve(root, args) {
          return Db.models.product.findAll({ where: args });
        }
      },
      orders: {
        type: new GraphQLList(Order),
        args: {
          id: { type: GraphQLID }
        },
        resolve(root, args) {
          return Db.models.order.findAll({ where: args });
        }
      }
    };
  }
});

export default QueryType;
