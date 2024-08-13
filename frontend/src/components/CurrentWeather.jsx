import React, { useEffect, useState } from 'react'
import './CurrentWeather_.scss'

const CurrentWeather = ({
        locationName,
        currTemp,
        currConditionText,
        currConditionIcon
    }) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        })

        return () => clearInterval(interval)
    },[])

    const minutes = time.getMinutes()
    const hours = time.getHours()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()

    return (
        <section className='current-weather'>
            <h3>{currTemp}&#176;</h3>
            <div className='current-weather__city'>
                <div className='current-weather__city-name'>{locationName}</div>
                <div>
                    <span className='current-weather__time'>{hours}:{minutes}</span>
                    {/* <span className='current-weather__date'> Monday Dec 20</span>  */}
                    <span className='current-weather__date'> {days[day]} {months[month]} {date}</span>
                </div>
            </div>
            <div className='current-weather__data'>
                <img
                    src={currConditionIcon}
                    className='current-weather__icon'
                    alt='weather-icon'
                />
                <p className='current-weather__condition'>{currConditionText}</p>
            </div>
            
        </section>
    )
}

export default CurrentWeather