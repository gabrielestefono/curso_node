const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, 'templates')

// ler o body

app.use(
	express.urlencoded({
		extended: true,
	}),
)

app.use(express.json())

app.get("/users/add", (req, res)=>{
	res.sendFile(`${basePath}/userForm.html`);
})

app.post("/users/save", (req, res)=>{
	console.log(req.body);

	const name = req.body.name;
	const age = req.body.idade;

	console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

	res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, res)=>{
	const id = req.params.id;

	// leitura da tabela user e resgatar um usuário do banco de dados

	console.log(`Estamos buscando pelo usuário de id: ${id}`)
	res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res)=>{
	res.sendFile(`${basePath}/index.html`);
})

app.listen(port, ()=>{
	console.log(`Aplicação executando na porta ${port}: http://localhost:${port}`);
})