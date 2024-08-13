const getForecast = async (cityName) => {
    try {
        const response = await fetch(`http://localhost:${process.env.BACK_PORT}/weather-api/forecast?cityName=${cityName}`,{
            method: 'GET',
        })

        if (!response.ok) {
            return {msg: 'Request error'}
        }
        console.log(response.status)
        let result = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return {msg: 'Request error'}
    }
}

export default { getForecast }