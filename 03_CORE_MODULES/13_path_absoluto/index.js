const path = require('path');

console.log(path.resolve('teste.txt'));

// Formar um path

const midFolder = "relatorios";
const filename = "gabriel.txt"

const finalPath = path.join(midFolder, filename);

console.log(finalPath);