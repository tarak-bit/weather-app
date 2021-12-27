const express = require('express')
const {getWeather,getWeatherFromIp} = require('../controllers/weatherController')

const router = express.Router()


router.route('/').get(getWeather)

router.route('/ip').get(getWeatherFromIp)

module.exports = router