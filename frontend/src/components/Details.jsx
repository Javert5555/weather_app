import React from 'react'
import './Details_.scss'

const Details = ({
        currCloud,
        currHumidity,
        currWind
    }) => (
    <section className='details'>
        <h2>Weather Details</h2>
        <ul>
            <li>
                <span>Cloud cover</span>
                <span className='details__cloud'>{currCloud}%</span>
            </li>
            <li>
                <span>Humidity</span>
                <span className='details__humidity'>{currHumidity}%</span>
            </li>
            <li>
                <span>Wind</span>
                <span className='details__wind'>{currWind} km/h</span>
            </li>
        </ul>
        <p className='line'></p>
    </section>
)

export default Details