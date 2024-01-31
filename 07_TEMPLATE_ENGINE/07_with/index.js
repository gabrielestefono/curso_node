const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res)=>{
	const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
	
	res.render('dashboard', {
		items: items
	});
})

app.get('/post', (req, res)=>{
	const post = {
		title: "Aprender NodeJS",
		category: "Javascript",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget",
		comments: 4 
	}

	res.render('blogpost', {
		post: post
	});
})

app.get('/', (req, res) => {
	const user = {
		name: "Gabriel",
		surname: "Estéfono",
		age: 27
	}

	const palavra = "Teste";

	const auth = true; 

	const approved = false;

	res.render('home', {
		user: user,
		palavra: palavra,
		auth: auth,
		approved: approved,
	});
})


app.listen(3000, ()=>{
	console.log('http://localhost:3000')
})