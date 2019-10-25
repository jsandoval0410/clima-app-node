const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLatLong(argv.direccion)
// .then(resp => console.log(resp));

// clima.getClima(40.750000, -74.000000)
// .then(resp => console.log(resp))
// .catch(err => console.log(err));
// clima.getClima(40.750000, -74.000000)
// .then(console.log)
// .catch(console.log);


const getInfo = async (direccion) => {
    try {
        const respLugar = await lugar.getLatLong(direccion);
        const respClima = await clima.getClima(respLugar.lat, respLugar.lng);
        return `El clima de ${respLugar.direccion} es de ${respClima}`;
    } catch (error) {
        console.log(error);
        return `No se pudo determinar el clima de ${respLugar.direccion}`
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
