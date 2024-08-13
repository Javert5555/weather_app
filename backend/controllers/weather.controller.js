import forecastView from '../models/forecast.model.js'

const forecast = async (req, res) => {
    try {

        if (!req.query?.cityName) {
            return res.json({
                msg: 'Название города некорректно'
            })
        }

        const dayCount = 6

        const resWeatherApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&days=${dayCount}&q=${req.query.cityName}&aqi=no`, {
            method: 'GET'
        })

        const weatherForecastData = await resWeatherApi.json()
        console.log(weatherForecastData.forecast.forecastday)


        // console.log(weatherForecastData.forecast.forecastday.slice(0, dayCount))
        
        return res.json(forecastView(weatherForecastData))

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'Ошибка запроса'
        })
    }
}

export default { forecast }