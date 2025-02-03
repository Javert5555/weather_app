import React, { useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import Details from './components/Details.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'
import Alert from './components/Alert.jsx'
import dayImage from '../assets/day.jpg'
import changeBgImage from './utils/changeBgImg.js'
import './app.scss'

const App = () => {
  const [locationName, setLocationName] = useState('City')
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
  const [currConditionCode, setCurrConditionCode] = useState(801)
  const [currConditionIcon, setCurrConditionIcon] = useState('https://openweathermap.org/img/wn/02d@2x.png')
  const [currCloud, setCurrCloud] = useState(0)
  const [currHumidity, setCurrHumidity] = useState(0)
  const [currWind, setCurrWind] = useState(0)
  const [isDay, setIsDay] = useState(true)
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [alertText, setAlertText] = useState('')
  const [bgImg, setBgImg] = useState(`url(${dayImage})`)

  const showAlert = (text) => {
    setAlertText(text)
    setIsShowAlert(true)
    setTimeout(() => {
      setIsShowAlert(false)
    }, 2500)
  }

  useEffect(() => {
    changeBgImage(currConditionCode, isDay, setBgImg)
  }, [currConditionCode])

  return (
    <div
      style={{
        backgroundImage: bgImg,
      }}
      className='weather-app'
    >
      <Alert
        alertText={alertText}
        isShowAlert={isShowAlert}
      />
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

          showAlert={showAlert}
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
