import { GraphQLSchema } from 'graphql';
import QueryType from './type/query';

const schema = new GraphQLSchema({
  query: QueryType
});

export default schema;
