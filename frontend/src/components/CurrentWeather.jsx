import React, { useEffect, useState } from 'react'
import './CurrentWeather_.scss'

const CurrentWeather = ({
        locationName,
        localtime,
        currTemp,
        currConditionText,
        currConditionIcon
    }) => {
    
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const day = (new Date()).getDay()

    const [hours, minutes] = localtime.split(' ')[1].split(':')
    const [_, month, date] = localtime.split(' ')[0].split('-').map(el => parseInt(el))

    return (
        <section className='current-weather'>
            <h3>{currTemp}&#176;</h3>
            <div className='current-weather__city'>
                <div className='current-weather__city-name'>{locationName}</div>
                <div>
                    <span className='current-weather__time'>{hours}:{minutes}</span>
                    <span className='current-weather__date'>{days[day]} {months[month-1]} {date}</span>
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