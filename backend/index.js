const { readFileSync } = require('fs');

const readFile = async () => JSON.parse(readFileSync('./backend/clients.json'));

module.exports = readFile;
