// Importações de modules instalados ou padrões
const express = require('express');
const path = require('path');
const basePath = path.join(__dirname, 'templates');

// importação de modules criados
const users = require('./users');

// Definições
const app = express();
const port = 3000;

// Rotas
app.use('/users', users)
app.get('/', (req, res)=>{res.sendFile(`${basePath}/index.html`);})

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Execução
app.listen(port, ()=>{console.log(`Aplicação executando na porta ${port}: http://localhost:${port}`);})