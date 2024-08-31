import React, { useEffect, useState } from 'react'
import Cards from '../../Cards/Cards'
import "./Country.css"
import axios from 'axios'


function Countries() {
  const [all,setAll]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
axios('https://restcountries.com/v3.1/all')
.then((res)=>{
  setAll(res.data)
})
.catch((err)=>{
  console.log(err);
  
})
  }
  return (
    <div className='headCoun'>
      <h2>Countries Data</h2>
    <div className='maiN'>
      
      {
        all.map((cnty)=><Cards data={cnty} key={cnty.cca3}/>)
      }
    </div>
    </div>
  )
}

export default Countries
