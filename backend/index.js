const express = require('express');

const { readFileSync } = require('fs');

const cors = require('cors');

const PORT = 3009;  

// Following functions simulate connection with database

const getClients = async () => JSON.parse(readFileSync('./clients.json'));
const getStocks = async () => JSON.parse(readFileSync('./stocks.json'));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/clients', async (_request, response) => {
  const clients = await getClients();
  response.status(200).send(clients);
});

app.get('/clients/:email', async (request, response) => {
  const { email } = request.params;
  const clients = await getClients();
  const wantedClient = clients.filter((client) => client.email === (email))[0];
  if (wantedClient) response.status(200).send(wantedClient);
});

app.get('/stocks', async (_request, response) => {
  const stocks = await getStocks();
  response.status(200).send(stocks);
});

app.get('/stocks/:id', async (request, response) => {
  const { id } = request.params;
  const stocks = await getStocks();
  const wantedStock = stocks.find((stock) => stock.id === parseInt(id));
  response.status(200).send(wantedStock);
});

app.listen(PORT, () => {
  console.log(`Online e rodando na porta ${PORT}`);
});
