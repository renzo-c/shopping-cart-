import Product from '../model/product';
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import Db from '../conn/db';

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
      }
    };
  }
});

export default MutationType;
