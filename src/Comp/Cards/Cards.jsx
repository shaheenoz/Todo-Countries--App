import React from 'react'
import "./Cards.css"

function Cards({data}) {
  return (
  <div class="card-container">
      <a href="/" class="hero-image-container">
        <img class="hero-image" src={data.flags.png} alt="country img"/>
      </a>
      <main class="main-content">
        <h1>{data.name.common}</h1>
        <div className='cards-p'>
        <p className='p-details'>Continent: {data.continents}</p>
        <p className='p-details'>Capital: {data.capital}</p>
        <p className='p-details'>Population: {data.population}</p>
        <p className='p-details'>FIFA Code: {data.fifa}</p>
        </div>
      </main>
    </div>
  )
}

export default Cards
