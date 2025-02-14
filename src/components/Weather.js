import React, { useEffect, useRef, useState } from 'react'
import "./Weather.css"
import search_icon from '../assests/search.png'
import clear_icon from '../assests/clear.png'
import drizzle_icon from '../assests/drizzle.png'
import cloud_icon from '../assests/cloud.png'
import humidity_icon from '../assests/humidity.png'
import rain_icon from '../assests/rain.png'
import snow_icon from '../assests/snow.png'
import wind_icon from '../assests/wind.png'

export default function Weather() {
    const inputref = useRef()
    const key = '57f116700f023d2da01dffc86f55021f'
    const [weatherdata,setweatherdata]=useState(false);
    const allicons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,

    }
    const search = async(city)=>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const icon= allicons[data.weather[0].icon] || clear_icon;
            setweatherdata({
                humidity :data.main.humidity,
                windspeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon,
            });
        }
        catch(error){

        }
    }
    useEffect(()=>{
        search("London");
    },[]);

  return (
    <div className='weather'>
        <div className="search-bar">
        <input ref={inputref} type="text" placeholder="search "name="" id="" />
        <img src={search_icon} alt="" onClick={()=>search(inputref.current.value)}/>
        </div>
        <img src={weatherdata.icon} alt="" className='weather-icon'/>
        <p className='temperature'>{weatherdata.temperature}°c</p>
        <p className='location'>{weatherdata.location}</p>
        <div className="weatherdata">
        <div className="col">
            <img src={humidity_icon} alt="" />
            <div>
                <p>{weatherdata.humidity}%</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className="col">
            <img src={wind_icon} alt="" />
            <div>
                <p>{weatherdata.windspeed} km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
        </div>
    </div>
  )
}
