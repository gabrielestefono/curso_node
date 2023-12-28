const x = 10;

if(!Number.isInteger(x)){
	throw new Error('X não é um numero inteiro');
}

console.log('Continuando o código...');