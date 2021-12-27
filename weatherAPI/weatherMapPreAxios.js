const axios = require('axios')

exports.preAxios = (searchBy) => {
    const weatherMap = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5',
        params:{...searchBy, appid:process.env.WEATHER_API_KEY}
    })

    return weatherMap
    
}

exports.preAxiosIp = () => {
    const weatherByIp = axios.create({
        baseURL: 'http://api.ipstack.com',
        params:{
            access_key:process.env.WEATHER_API_KEY_FROM_IP
        }
    })
    return weatherByIp
}