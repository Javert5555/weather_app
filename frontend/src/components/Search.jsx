import React, { useState } from 'react'
import { getForecast } from '../api/api-search'
import './Search_.scss'

const Search = () => {
    let [searchLocation, setSearchLocation] = useState('')

    const handleClickSearch = e => {
        e.preventDefault()
    }

    const handleChangeSearch = ({ target }) => {
        setSearchLocation(target.value)
        console.log(searchLocation)
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
                    <li>Moscow</li>
                    <li>Belgrade</li>
                    <li>Minsk</li>
                    <li>Rakka</li>
                </ul>
            </div>
            <p className='line'></p>
        </section>
    )
}

export default Search