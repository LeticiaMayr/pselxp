const express = require('express');

const { readFileSync } = require('fs');

// Following functions simulate connection with database

const getClients = async () => JSON.parse(readFileSync('./clients.json'));
const getStocks = async () => JSON.parse(readFileSync('./stocks.json'));

const app = express();

app.use(express.json());

app.get('/clients', async (_request, response) => {
  const clients = await getClients();
  response.status(200).send(clients);
});

app.get('/stocks', async (_request, response) => {
  const stocks = await getStocks();
  response.status(200).send(stocks);
});

app.listen(3009, () => {
  console.log('Online');
});