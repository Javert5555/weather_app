const forecastView = (forecastData, dayCount) => ([
    {
        name: forecastData?.location?.name,
        temp: forecastData?.current?.temp_c,
        windSpeed: forecastData?.current?.wind_kph,
        humidity: forecastData?.current?.humidity,
        cloud: forecastData?.current?.cloud,
        conditionText: forecastData?.current?.condition?.text,
        conditionIcon: forecastData?.current?.condition?.icon
    },
    forecastData.forecast.forecastday.slice(0, dayCount).map(({ day }) => ({
        minTemp: day?.mintemp_c,
        maxTemp: day?.maxtemp_c,
        windSpeed: day?.maxwind_kph,
        humidity: day?.avghumidity,
        conditionText: day?.condition?.text,
        conditionIcon: day?.condition?.icon
    }))

])

export default forecastView