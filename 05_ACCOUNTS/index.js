// Modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

// Modules internos
const fs = require('fs');

operation();

function operation(){
	inquirer.prompt([{
		type: 'list',
		name: 'action',
		messagge: 'O que deseja fazer?',
		choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
	}]).then((answer)=>{
		const action = answer['action'];
		if(action == "Criar conta"){
			createAnAccount();
		}
	}).catch((err)=>console.log(err));
}

// Criar uma conta

function createAnAccount(){
	console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
	console.log(chalk.green("Defina as opções da sua conta a seguir: "));
	buildAccount();
}

function buildAccount(){
	inquirer.prompt([
		{
			name: 'accountName',
			message: 'Digite o nome para a sua conta: ',
		}
	]).then((answer) => {
		const accountName = answer['accountName'];

		console.info(accountName);

		if(!fs.existsSync('accounts')){
			fs.mkdirSync('accounts');
		}

		if(fs.existsSync(`accounts/${accountName}.json`)){
			console.log(chalk.bgRed.black('Essa conta já existe, escolha outro nome!'));
			buildAccount();
			return;
		}

		fs.writeFileSync(`accounts/${accountName}.json`,
			`{"balance": 0}`,
			function(err){
				console.log(err);
			}
		);
		console.log(chalk.green(`Parabéns, a sua conta foi criada!`));
	}).catch(err => console.log(err));
}