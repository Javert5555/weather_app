import React, { useState } from 'react'
import { getForecast } from '../api/api-search.js'
import './Search_.scss'

const Search = ({
        setLocationName,
        setLocaltime,
        setCurrTemp,
        setCurrConditionText,
        setCurrConditionCode,
        setCurrConditionIcon,
        setCurrCloud,
        setCurrHumidity,
        setCurrWind,
        setIsDay,
        showAlert
    }) => {

    const [searchLocation, setSearchLocation] = useState('')

    const [searchedLocations, setSearchedLocations] = useState(
        localStorage.getItem('searchedLocations')
        ? JSON.parse(localStorage.getItem('searchedLocations'))
        : ['Moscow', 'Belgrade', 'Minsk', 'Beijing']
    )
    
    const updateStates = result => {
        setLocationName(result.current.name)
        setLocaltime(result.current.localtime)
        setCurrTemp(Math.round(result.current.temp))
        setCurrConditionText(result.current.conditionText)
        setCurrConditionCode(result.current.conditionCode)
        setCurrConditionIcon(result.current.conditionIcon)
        setCurrCloud(result.current.cloud)
        setCurrHumidity(result.current.humidity)
        setCurrWind(result.current.windSpeed)
        setIsDay(result.current.isDay)
    }

    const handleClickSearch = async e => {
        e.preventDefault()

        if (!searchLocation) {
            // alert('Specify location')
            showAlert('Specify location')
            return
        }

        const result = await getForecast(searchLocation)

        if (result?.msg) {
            // alert(result?.msg)
            showAlert(result?.msg)
            return
        }

        updateStates(result)

        if (!localStorage.getItem('searchedLocations')) {
            localStorage.setItem('searchedLocations', JSON.stringify([...searchedLocations].slice(0, 4)))
            setSearchedLocations(JSON.parse(localStorage.getItem('searchedLocations')))
        }
        
        if (!JSON.parse(localStorage.getItem('searchedLocations')).includes(result.current.name)) {
            localStorage.setItem('searchedLocations', JSON.stringify([result.current.name, ...searchedLocations].slice(0, 4)))
            setSearchedLocations(JSON.parse(localStorage.getItem('searchedLocations')))
        }
    }

    const handleClickSearchedLocation = async ({ target }) => {
        const result = await getForecast(target.innerText)

        if (result?.msg) {
            return
        }

        updateStates(result)
    }

    const handleChangeSearch = ({ target }) => {
        setSearchLocation(target.value)
    }

    return (
        <section>
            <search className='search'>
                <form action='submit'>
                    <div className='search__text-group'>
                        <input
                            type='text'
                            className='search__text'
                            name='search-data'
                            placeholder='Search...'
                            onChange={handleChangeSearch}
                        ></input>
                        <p className='line'></p>
                    </div>
                    <button
                        className='search__btn'
                        type='submit'
                        onClick={handleClickSearch}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"  className='search__btn-icon' strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
            </search>
            <div className='search-history'>
                <ul>
                    {searchedLocations.map((searchedLocation, index) => 
                        <li key={`searched-location-${index}`} onClick={handleClickSearchedLocation}>{searchedLocation}</li>
                    )}
                </ul>
            </div>
            <p className='line'></p>
        </section>
    )
}

export default Search