const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

	const user = {
		name: "Gabriel",
		surname: "Estéfono",
		age: 27
	}

	const palavra = "Teste";

	res.render('home', {
		user: user,
		palavra: palavra
	});
})

app.listen(3000, ()=>{
	console.log('http://localhost:3000')
})