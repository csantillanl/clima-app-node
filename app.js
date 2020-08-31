const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const clima = require('./Clima/clima');

const encodedUrl = encodeURI(argv.direccion);

clima.getClima(encodedUrl)
    .then(console.log)
    .catch(console.log);