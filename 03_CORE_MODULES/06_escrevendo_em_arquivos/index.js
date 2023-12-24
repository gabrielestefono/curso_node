const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
	const urlInfo = require('url').parse(req.url, true);
	const nome = urlInfo.query.nome;

	if(!nome){
		fs.readFile('index.html', function(err, data){
			res.writeHead(200,{'Content-Type': "text/html"});
			res.write(data);
			return res.end();
		});
	}else{
		fs.writeFile("arquivo.txt", nome, function(err, data){
			res.writeHead(302,{
				location: "/"
			})
			res.end();
		})
	}	
});

server.listen(port, ()=>{
	console.log(`servidor rodando na porta http://localhost:${port}`);
})