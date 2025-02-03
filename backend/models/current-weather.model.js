class CurrentWeatherView {
    constructor(current) {
        this.name = current?.name || '',
        this.localtime = this.#convertUnixTimestampToTime(current?.dt || Math.floor((new Date()).getTime() / 1000)),
        this.isDay = this.#checkIsDay(current?.dt || Math.floor((new Date()).getTime() / 1000)),

        this.temp = current?.main?.temp || 0,
        this.windSpeed = current?.wind?.speed || 0,
        this.humidity = current?.main?.humidity || 0,
        this.cloud = current?.clouds?.all || 0,
        this.conditionText = current?.weather[0]?.description || '',
        this.conditionCode = current?.weather[0]?.id || 800,

        this.conditionIcon = current?.weather[0]?.icon
        ? `https://openweathermap.org/img/wn/${current?.weather[0]?.icon}@2x.png`
        : 'https://openweathermap.org/img/wn/01d@2x.png'
    }

    #convertUnixTimestampToTime(unixDateTime) {
        const date = new Date(unixDateTime * 1000)

        let hours = `0${date.getHours()}`.slice(-2)
        let minutes = `0${date.getMinutes()}`.slice(-2)
        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)
        return `${year}-${month}-${day} ${hours}:${minutes}`
    }

    #checkIsDay(unixDateTime) {
        const hours = new Date(unixDateTime * 1000).getHours()
        if (hours >= 20 || hours <= 6) {
            return false
        }
        return true
    }
}

export default CurrentWeatherView