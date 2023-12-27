const minimist = require('minimist');

// interno
const moduloSoma = require('./soma').soma;
const soma = moduloSoma;

// externo
const args = minimist(process.argv.slice(2));

const valorA = args['valorA'];
const valorB = args['valorB'];

soma(valorA, valorB);