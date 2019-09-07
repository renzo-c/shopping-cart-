import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
