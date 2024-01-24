// Importações de modules instalados ou padrões
const express = require('express');
const path = require('path');
const basePath = path.join(__dirname, '../templates')
const router = express.Router();

// Middlewares
router.use(express.urlencoded({extended: true}))
router.use(express.json())

// Rotas
router.get("/add", (req, res)=>{res.sendFile(`${basePath}/userForm.html`);})
router.post("/save", (req, res)=>{console.log(req.body);
	const name = req.body.name;
	const age = req.body.idade;
	console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)
	res.sendFile(`${basePath}/userForm.html`)
})
router.get('/:id', (req, res)=>{
	const id = req.params.id;
	// leitura da tabela user e resgatar um usuário do banco de dados
	console.log(`Estamos buscando pelo usuário de id: ${id}`)
	res.sendFile(`${basePath}/users.html`);
})

// Exportação
module.exports = router;