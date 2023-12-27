const x = 10;
const y = "João";
const z = [1, 2];

console.log(x, y, z);

//contando

console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de y é ${y}, contagem`);
console.count(`O valor de z é ${z}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);

// Variável entre strings

console.log("O nome é %s, ele é programador", y);

// Limpar o console

setTimeout(() => {
	console.clear()
}, 2000)