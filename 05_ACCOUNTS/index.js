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
		}else if(action == "Consultar saldo"){
			getAccountBalance();
		}else if(action == "Depositar"){
			deposit();
		}else if(action == "Sacar"){
			// withdraw();
		}else if(action == "Sair"){
			console.log(chalk.bgBlue.black('Obrigado por usar o nosso banco!'));
			process.exit();
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
		operation();
	}).catch(err => console.log(err));
}

// Adiciona saldo a conta do usuário
function deposit(){
	inquirer.prompt([
		{
			name: 'accountName',
			message: 'Qual o nome da sua conta: ',
		},
	]).then((answer) => {
		const accountName = answer['accountName'];
		if(!checkAccount(accountName)){
			return deposit();
		}

		inquirer.prompt([
			{
				name: 'amount',
				message: 'Quanto você deseja depositar: ',
			},
		]).then((answer) => {
			const amount = answer['amount'];
			// add an amount to the account
			addAmount(accountName, amount);

			operation();
		}).catch(err => console.log(err));
	}).catch(err => console.log(err));
}

function checkAccount(accountName){
	if(!fs.existsSync(`accounts/${accountName}.json`)){
		console.log(chalk.bgRed.black('Essa conta não existe, escolha outro nome!'));
		return false;
	}
	return true;
}

function addAmount(nomeConta, valor){
	const account = getAccount(nomeConta);
	if(!valor){
		console.log(chalk.bgRed.black('Valor inválido!'));
		deposit();
	}
	account.balance += parseFloat(valor) + parseFloat(account.balance);
	fs.writeFileSync(`accounts/${nomeConta}.json`,
		JSON.stringify(account),
		function(err){
			console.log(err);
		}
	);

	console.log(chalk.green(`Foi depositado o valor de R$ ${valor} na sua conta!`));
}

function getAccount(accountName){
	const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
		encoding: 'utf-8',
		flag: 'r'
	});

	return JSON.parse(accountJson);
}