const getForecast = async (cityName) => {
    try {
        // const response = await fetch(`http://localhost:${process.env.BACK_PORT}/weather-api/forecast?cityName=${cityName}`,{
        const response = await fetch(`http://backend:${process.env.BACK_PORT}/weather-api/forecast?cityName=${cityName}`,{
            method: 'GET',
        })

        const result = await response.json()

        if (!response.ok) {
            console.log(result.msg)
            return { msg: result.msg }
        }
        
        return result

    } catch (error) {
        console.log(error)
        return {msg: 'Request error'}
    }
}

export { getForecast }