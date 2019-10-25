const axios = require('axios');

const getLatLong = async (dir) => {
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': 'f7b0b2e0d9mshee2e53087b5c27ep1090d4jsnf4e613596ccf' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon

    return { direccion, lat, lng };
};

module.exports = {
    getLatLong
}