import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is a test of end point');
});

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
