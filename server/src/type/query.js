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
      },
      getOrderCode: {
        type: Order,
        resolve(roots, args) {
          return Db.models.order
            .findAll({ limit: 1, order: [['createdAt', 'DESC']] })
            .then(result => {
              console.log('result', result[0].code);
              return result[0];
            });
        }
      }
    };
  }
});

export default QueryType;
