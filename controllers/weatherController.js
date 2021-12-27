const axios = require('axios')
const catchAsync = require('../utils/catchAsync')
const {preAxios, preAxiosIp} = require('../weatherAPI/weatherMapPreAxios')


exports.getWeather = catchAsync(async (req, res, next) => {

    const searchBy = req.query.q ? {q:req.query.q}:{...req.query, exclude:'hourly,minutely'}
    const endPoint = req.query.q ? '/weather':'/onecall'

    const {data} = await preAxios(searchBy).get(endPoint)

    if(req.query.q){
        var data2= await preAxios({...data.coord,exclude:'hourly,minutely'}).get('/onecall')
    }

    res.status(200).json({
        status:'success',
        weatherReport:req.query.q?data2.data : data
    })
})

exports.getWeatherFromIp = catchAsync(async (req,res,next) => {
    //have to add dynamic ip on fly
    const {data} = await preAxiosIp().get('/134.201.250.155')
    const {latitude, longitude} = data
    const result = await preAxios({lat:latitude,lon:longitude,exclude:'hourly,minutely'}).get('/onecall')
    res.status(200).json({
        status:'success',
        weatherReport:result.data
    })
})