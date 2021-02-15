const express = require('express');
const path = require('path');
const nomeApp = process.env.arcadenoecliente;
const app = express();

app.use(express.static(`${__dirname}/dist/arcadenoecliente`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/arcadenoecliente/index.html`));
});

app.listen(process.env.PORT || 8080);