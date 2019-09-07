import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
