import express from 'express';

const { readFileSync } = require('fs');

// Following functions simulate connection with database

const getClients = async () => JSON.parse(readFileSync('./backend/clients.json'));
const getStocks = async () => JSON.parse(readFileSync('./backend/stocks.json'));

const app = express();

app.use(express.json());

app.get('/clients', (_request, response) => {
  response.status(200).send(getClients());
});

app.get('/stocks', (_request, response) => {
  response.status(200).send(getStocks());
});

app.listen(3009, () => {
  console.log('Online');
});