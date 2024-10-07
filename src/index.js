const express = require('express');
const path = require('node:path');
const router = require('./routes');

const app = express();

// Configuracao do ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuracao da pasta public (arquivos estáticos)
app.use(express.static('public'));

// Configuração de leitura dos dados da requisição
app.use(express.urlencoded( { extended: true }));

// Configuração das rotas
app.use(router);

const PORT = process.env.PORT || 3000; // se PORT nao estiver especificada no servidor, entao usa 3000
app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}/`));