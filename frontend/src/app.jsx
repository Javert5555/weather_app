import React, { useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import Details from './components/Details.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'
import dayImage from '../assets/day.jpg'
import dayCloudImage from '../assets/day_cloudy.jpg'
import daySnowyImage from '../assets/day_snowy.jpg'
import nightImage from '../assets/night.jpg'
import nightCloudImage from '../assets/night_cloudy.jpg'
import nightSnowyImage from '../assets/night_snowy.jpg'
import rainImage from '../assets/rainy.jpg'


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
  const [currConditionCode, setCurrConditionCode] = useState(1061233)
  const [currConditionIcon, setCurrConditionIcon] = useState('//cdn.weatherapi.com/weather/64x64/day/122.png')
  const [currCloud, setCurrCloud] = useState(0)
  const [currHumidity, setCurrHumidity] = useState(0)
  const [currWind, setCurrWind] = useState(0)
  const [isDay, setIsDay] = useState(1)
  
  let bgImg = `url(${dayImage})`
  const root = document.documentElement;

  if (currConditionCode == 1000) {
    bgImg = isDay ? `url(${dayImage})` : `url(${nightImage})`
  } else if ([1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282].includes(currConditionCode)) {
    bgImg = isDay ? `url(${dayCloudImage})` : `url(${nightCloudImage})`
    root.style.setProperty('--inactive-color', isDay ? '#191919' : '#afafaf')
  } else if ([1063, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204, 1207, 1240, 1243, 1246, 1249, 1252].includes(currConditionCode)) {
    bgImg = `url(${rainImage})`
    root.style.setProperty('--inactive-color', '#121212')
  } else {
    bgImg = isDay ? `url(${daySnowyImage})` : `url(${nightSnowyImage})`
    root.style.setProperty('--inactive-color', isDay ? '#121212' : '#fff')
  }  

  return (
    <div
      style={{
        backgroundImage: bgImg,
      }}
      className='weather-app'
    >
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
        setCurrConditionCode={setCurrConditionCode}
          setLocationName={setLocationName}
          setLocaltime={setLocaltime}
          setCurrTemp={setCurrTemp}
          setCurrConditionText={setCurrConditionText}
          setCurrConditionIcon={setCurrConditionIcon}
          setCurrCloud={setCurrCloud}
          setCurrHumidity={setCurrHumidity}
          setCurrWind={setCurrWind}
          setIsDay={setIsDay}
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
