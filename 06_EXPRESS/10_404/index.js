// Importações de modules instalados ou padrões
const express = require('express');
const path = require('path');
const basePath = path.join(__dirname, 'templates');

// importação de modules criados
const users = require('./users');

// Definições
const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Arquivos estáticos
app.use(express.static('public'))

// Rotas
app.use('/users', users)
app.get('/', (req, res)=>{res.sendFile(`${basePath}/index.html`);})

// Middleware 404
app.use(function(req, res, next){
	res.status(404).sendFile(`${basePath}/404.html`)
})

// Execução
app.listen(port, ()=>{console.log(`Aplicação executando na porta ${port}: http://localhost:${port}`);})