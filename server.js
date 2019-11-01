require("dotenv").config()
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
const app = express();
import farmers from './routes/farmers'
import users from './routes/users'
const PORT = process.env.PORT || 4000;

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))


app.use('/farmers', farmers);
app.use('/users', users);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
  require('./utils/db')
  }
);