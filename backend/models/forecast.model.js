const forecastView = (forecastData, dayCount) => ({
    current: {
        name: forecastData?.location?.name,
        localtime: forecastData?.location?.localtime,
        isDay: forecastData?.current?.is_day,
        temp: forecastData?.current?.temp_c,
        windSpeed: forecastData?.current?.wind_kph,
        humidity: forecastData?.current?.humidity,
        cloud: forecastData?.current?.cloud,
        conditionText: forecastData?.current?.condition?.text,
        conditionCode: forecastData?.current?.condition?.code,
        conditionIcon: forecastData?.current?.condition?.icon
    },
    forecast: forecastData.forecast.forecastday.slice(0, dayCount).map(({ day }) => ({
        minTemp: day?.mintemp_c,
        maxTemp: day?.maxtemp_c,
        windSpeed: day?.maxwind_kph,
        humidity: day?.avghumidity,
        conditionText: day?.condition?.text,
        conditionIcon: day?.condition?.icon
    }))

})

export default forecastView