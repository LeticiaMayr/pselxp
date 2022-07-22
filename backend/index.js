const express = require('express');

const { readFileSync, writeFileSync } = require('fs');

const cors = require('cors');

const PORT = 3009;

// Following functions simulate connection with database

const updateClientAccount = async (file) => {
  writeFileSync('./clients.json', JSON.stringify(file));
};

const updateStockAmount = async (file) => {
  writeFileSync('./stocks.json', JSON.stringify(file));
};

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

app.put('/account/:id', async (request, response) => {
  const { id } = request.params;
  const { newBalance } = request.body;
  const clients = await getClients();

  const wantedClient = clients.find((client) => client.id === parseInt(id));
  wantedClient.money = newBalance;

  const newClientFile = clients.map((client) => {
    if (client.id === id) {
      return wantedClient;
    }
    return client;
  });

  await updateClientAccount(newClientFile);

  response.status(200).send(wantedClient);
});

app.put('/stocks/:id', async (request, response) => {
  const { id } = request.params;
  const { purchaseAmount, clientId } = request.body;
  const stocks = await getStocks();
  const clients = await getClients();

  // This part makes the necessary changes on assets

  const wantedStock = stocks.find((stock) => stock.id === parseInt(id));
  wantedStock.available = wantedStock.available - purchaseAmount;

  const newStockFile = stocks.map((stock) => {
    if (stock.id === id) {
      return wantedStock;
    }
    return stock;
  });

  await updateStockAmount(newStockFile);

  // This part makes necessary changes on clients

  const wantedClient = clients.find((client) => client.id === clientId);

  console.log(wantedClient);

  if (!wantedClient.stocks[id]) {
    wantedClient.stocks[id] = purchaseAmount;
    wantedClient.money += purchaseAmount * wantedStock.value;
  };

  if(wantedClient.stocks[id]) {
    wantedClient.stocks[id] += purchaseAmount;
    wantedClient.money -= purchaseAmount * wantedStock.value;
  };

  const newClientFile = clients.map((client) => {
    if (client.id === clientId) {
      return wantedClient;
    }
    return client;
  });

  await updateClientAccount(newClientFile);

  response.status(200).send(wantedStock);
});

app.listen(PORT, () => {
  console.log(`Online e rodando na porta ${PORT}`);
});
