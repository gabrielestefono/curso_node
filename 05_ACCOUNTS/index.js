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
}