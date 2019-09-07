import express from 'express';
import db from './conn/db';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is a test of end point');
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
  console.log('Environment variables set: ', process.env);
  console.log(`Express server listening on port ${PORT}`);
});
