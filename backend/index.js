/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');

const products = require('./products');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../Instrument-Store/src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Instrument-Store/src', 'main.jsx'));
});

app.get('/products', (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
