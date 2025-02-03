import forecastView from '../models/forecast.model.js'
import CurrentWeatherView from '../models/current-weather.model.js'

const getCurrentWeather = async (req, res) => {

    if (!req.query?.cityName) {
        return res.json({
            msg: 'Название города некорректно'
        })
    }

    const resWeatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_API_KEY}&q=${req.query.cityName}&units=metric`, {
        method: 'GET'
    })

    const currentWeatherData = await resWeatherApi.json()

    if (!resWeatherApi.ok) {
        return res.status(currentWeatherData.cod).json({
            msg: currentWeatherData.message
        })
    }
    const currentWeather = new CurrentWeatherView(currentWeatherData)

    return res.json(currentWeather)
}

// todo
const getForecast = async (req, res) => {

    try {

        if (!req.query?.cityName) {
            return res.json({
                msg: 'Название города некорректно'
            })
        }

        const resWeatherApi = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_API_KEY}&q=${req.query.cityName}&aqi=no&units=metric`, {
            method: 'GET'
        })

        const weatherForecastData = await resWeatherApi.json()

        if (!resWeatherApi.ok) {
            return res.status(400).json({
                msg: weatherForecastData.error.message
            })
        }
        
        return res.json(forecastView(weatherForecastData.list))

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'Request error'
        })
    }
}

export default { getCurrentWeather, getForecast }