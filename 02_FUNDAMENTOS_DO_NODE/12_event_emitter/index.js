const EventEmitter = require('events');

const eventEmmiter = new EventEmitter();

eventEmmiter.on('start', ()=>{
	console.log('Durante');
});

console.log('Antes');

eventEmmiter.emit('start');

console.log('Depois');