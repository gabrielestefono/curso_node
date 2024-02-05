const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
	partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

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

app.get('/blog', (req, res)=>{
	const posts = [
		{
			title: "Aprender node.js",
			category: "Javascript",
			body: "Teste",
			comments: 4
		},
		{
			title: "Aprender PHP",
			category: "PHP",
			body: "Teste",
			comments: 4
		},
		{
			title: "Aprender Python",
			category: "Python",
			body: "Teste",
			comments: 4
		}
	]

	res.render("blog", { posts: posts });
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