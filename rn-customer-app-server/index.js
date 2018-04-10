const express = require('express');
const bodyParser = require('body-parser');
const customers = require('./customers');

const app = express();

app.use(bodyParser.json());

app.get('/api/customers', (req, res) => {
  res.send(customers);
});
app.listen(7654, () => {
  console.log('Server is running on port 7654.');
});
