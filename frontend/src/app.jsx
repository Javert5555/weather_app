import React, { useState } from 'react'
import Search from './components/Search.jsx'
import Details from './components/Details.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'

import './app.scss'

const App = () => {
  const [locationName, setLocationName] = useState('Moscow')
  const [localtime, setLocaltime] = useState(new Date().toLocaleString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).split(',').join(''))
  const [currTemp, setCurrTemp] = useState(0)
  const [currConditionText, setCurrConditionText] = useState('Cloudy')
  const [currConditionIcon, setCurrConditionIcon] = useState('//cdn.weatherapi.com/weather/64x64/day/122.png')
  const [currCloud, setCurrCloud] = useState(0)
  const [currHumidity, setCurrHumidity] = useState(0)
  const [currWind, setCurrWind] = useState(0)

  return (
    <div className='weather-app'>
      <div className='container'>
        <header>
          <h1>Weather APP</h1>
        </header>
        <CurrentWeather
          locationName={locationName}
          localtime={localtime}
          currTemp={currTemp}
          currConditionText={currConditionText}
          currConditionIcon={currConditionIcon}
        />
      </div>
      <div className='panel'>
        <Search
          setLocationName={setLocationName}
          setLocaltime={setLocaltime}
          setCurrTemp={setCurrTemp}
          setCurrConditionText={setCurrConditionText}
          setCurrConditionIcon={setCurrConditionIcon}
          setCurrCloud={setCurrCloud}
          setCurrHumidity={setCurrHumidity}
          setCurrWind={setCurrWind}
        />
        <Details
          currCloud={currCloud}
          currHumidity={currHumidity}
          currWind={currWind}
        />
      </div>
    </div>
  )
}

export default App;
