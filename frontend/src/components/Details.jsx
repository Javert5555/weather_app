import React from 'react'
import './Details_.scss'

const Details = () => (
    <section className='details'>
        <h2>Weather Details</h2>
        <ul>
            <li>
                <span>Cloudy</span>
                <span className='details__cloud'>79%</span>
            </li>
            <li>
                <span>Humidity</span>
                <span className='details__humidity'>79%</span>
            </li>
            <li>
                <span>Wind</span>
                <span className='details__wind'>79km/h</span>
            </li>
        </ul>
        <p className='line'></p>
    </section>
)

export default Details