const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b7c30754e58da6712150eaea288ce822&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}