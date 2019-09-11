import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import Db from '../conn/db';
import Product, { ProductInputType } from '../model/product';
import Order from '../model/order';
import { generateOrderNumber } from '../helperFunctions';

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'Functions that edit data',
  fields() {
    return {
      addOrder: {
        type: Order,
        resolve(roots, args) {
          return Db.models.order
            .findAll({
              limit: 1,
              order: [['createdAt', 'DESC']]
            })
            .then(lastOrder => {
              let num = lastOrder[0]
                ? parseInt(lastOrder[0].code.slice(1)) + 1
                : 0;
              let code = generateOrderNumber(num);
              return Db.models.order.create({
                code
              });
            });
        }
      },
      updateProduct: {
        type: Product,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID)
          },
          stock: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(roots, args) {
          return Db.models.product
            .findOne({ where: { id: args.id } })
            .then(prod =>
              prod.update(args, { returning: true }).then(result => result)
            );
        }
      },
      addProductOrder: {
        type: Order,
        args: {
          products: {
            type: new GraphQLNonNull(
              new GraphQLList(new GraphQLNonNull(ProductInputType))
            )
          }
        },
        resolve(roots, args) {
          return Db.models.order
            .findAll({
              limit: 1,
              order: [['createdAt', 'DESC']]
            })
            .then(newOrder => {
              args.products.map(({ id }) => newOrder[0].addProduct(id));
              return null;
            });
        }
      }
    };
  }
});

export default MutationType;
