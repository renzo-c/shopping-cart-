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
import OrderResponse from '../model/productOrder';

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'Functions that edit data',
  fields() {
    return {
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
      generateOrder: {
        type: OrderResponse,
        args: {
          products: {
            type: new GraphQLList((ProductInputType))
          }
        },
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
              return Db.models.order
                .create({
                  code
                })
                .then(({ code, id }) => {
                  return Db.models.order
                    .findOne({
                      where: { id },
                      include: {
                        model: Db.models.product
                      }
                    })
                    .then(result => {
                      console.log('result!!!', Object.keys(result.__proto__));
                      console.log('result!!!', result);
                      // return result.addProducts(args.products);
                      return args.products.map(product => {
                        console.log('args.products!!!', product);
                        result.addProduct(product);
                        return null;
                      });
                    })
                    .then(() => {
                      return Db.models.order.findOne({
                        where: { code }
                      });
                    });
                });
            });
        }
      }
    };
  }
});

export default MutationType;
