const express = require('express');
const app = express();
const path = require('path');

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDirectoryPath = path.join(__dirname, '../views');

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.sendFile(viewsDirectoryPath + '/index.html');
});

app.listen(3000,  () => {
  console.log('Le serveur web est en cours d\'exécution sur le port 3000!');
});