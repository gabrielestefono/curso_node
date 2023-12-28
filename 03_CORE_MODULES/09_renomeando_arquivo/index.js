const fs = require('fs');

fs.writeFileSync("arquivo.txt", "Olá!");
fs.rename("arquivo.txt", "novoArquivo.txt", (err)=> err ? console.log(err) : console.log("Arquivo Renomeado!"));