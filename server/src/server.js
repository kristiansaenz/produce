import 'dotenv/config';
import express from 'express';
const app = express();

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`),
);

//to run server 'nodemon start.js'