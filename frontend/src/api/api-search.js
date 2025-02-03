const getForecast = async (cityName) => {
    try {
        const response = await fetch(`http://localhost:${process.env.BACK_PORT}/weather-api/current-weather?cityName=${cityName}`,{
            method: 'GET',
        })

        const result = await response.json()

        if (!response.ok) {
            return { msg: result.msg }
        }
        
        return result

    } catch (error) {
        return {msg: 'Request error'}
    }
}

export { getForecast }