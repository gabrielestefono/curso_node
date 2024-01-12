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
		console.log(action);
	}).catch((err)=>console.logg(err));
}