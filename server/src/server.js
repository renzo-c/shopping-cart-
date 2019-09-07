import express from 'express';
import db from './conn/db';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is a test of end point');
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
