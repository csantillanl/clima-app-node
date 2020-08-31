const axios = require('axios');

const getClima = async(city) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e3b41ba3bf391ff7627eb1c9ebe8bad&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}