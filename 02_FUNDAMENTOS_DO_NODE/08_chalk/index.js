const chalk = require('chalk');

const nota = 3;

if(nota >= 7){
	console.log(chalk.green("Parabéns, você está aprovado!"));
}else if(nota >= 5){
	console.log(chalk.bgRed("Você precisará fazer a prova de recuperação!"));
}else{
	console.log(chalk.red("Você está reprovado"));
}