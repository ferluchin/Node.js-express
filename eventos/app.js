const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () => {
    console.log('Nuevo producto');
});
