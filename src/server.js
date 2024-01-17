//express server
const path = require('path');
const express = require('express');
const expressRoutes = require('./routes');
const addModels = require('./db/middleware/add-models');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);

app.use(express.json());
app.use(addModels);
app.use(expressRoutes);

app.listen(port, host, () => {
    console.log(`Server is now running on http://localhost:${port}`);
  });