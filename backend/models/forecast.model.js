// todo
const forecastView = (forecastData, dayCount = 5) => ({
    forecast: forecastData.forecast.forecastday.slice(0, dayCount).map(({ day }) => ({
        minTemp: day?.mintemp_c || '',
        maxTemp: day?.maxtemp_c || '',
        windSpeed: day?.maxwind_kph || '',
        humidity: day?.avghumidity || '',
        conditionText: day?.condition?.text || '',
        conditionIcon: day?.condition?.icon || ''
    }))
})

export default forecastView