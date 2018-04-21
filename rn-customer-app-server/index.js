const express = require('express');
const bodyParser = require('body-parser');
const customers = require('./customers');

const fakeUser = { username: 'admin', password: '123456' };

const app = express();

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { account, password } = req.body;
  if (account === fakeUser.username && password === fakeUser.password) {
    res.send({ token: 'testtokendsfdsdsvlsdvsdjlsdvjslvjfsjdlfj', salt: 'sddd' });
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/api/customers', (req, res) => {
  res.send(customers);
});

app.post('/api/customers', (req, res) => {
  const id = customers.reduce((prevId, current) => Math.max(prevId, current.id), 0);
  const customer = { ...req.body, id: id + 1 };
  customer.avatar = 'https://robohash.org/velanimisoluta.png?size=72x72&set=set1';
  customers.push(customer);
  res.send({ result: true, customer });
});

app.put('/api/customers/:id', (req, res) => {
  const id = Number(req.params.id);
  const customerIndex = customers.findIndex(m => m.id == id);

  if (customerIndex >= 0) {
    const customer = { ...customers[customerIndex], ...req.body };
    customers[customerIndex] = customer;
    res.send({ result: true, customer });
  } else {
    res.status(400).send('找不到 customer !');
  }
});

app.delete('/api/customers/:id', (req, res) => {
  const id = Number(req.params.id);
  const customerIndex = customers.findIndex(m => m.id == id);
  if (customerIndex >= 0) {
    customers.splice(customerIndex, 1);
    res.send({ result: true });
  } else {
    res.status(400).send('找不到 customer !');
  }
});

app.listen(7654, () => {
  console.log('Server is running on port 7654.');
});
