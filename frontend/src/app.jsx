import React from 'react'
import Search from './components/Search.jsx'
import Details from './components/Details.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'

import './app.scss'

const App = () => {
  // let ask = async () => {
  //   let response = await fetch(`http://localhost:${process.env.BACK_PORT}/weather-api/forecast?cityName=London`,{
  //     method: 'GET',
  //     // headers: {
  //     //   'Content-Type': 'application/json'
  //     // }
  //   })
  //   let text = await response.text()
  // }
  return (
    <div className='weather-app'>
      <div className='container'>
        <header>
          <h1>Weather APP</h1>
        </header>
        <CurrentWeather />
      </div>
      <div className='panel'>
        <Search />
        <Details />
      </div>
    </div>
  )
}

export default App;
