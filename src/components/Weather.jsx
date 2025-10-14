import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'


const Weather = () => {
    const inputRef=useRef()
    const[weatherData,setWeatherData]=useState(false);
    const allIcons={
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
    const search= async(city)=>{
        if(city==""){
            alert("Please enter city name");
            return;
        }
        try{
            const apiKey = import.meta.env.VITE_APP_ID;
            console.log("API Key:", apiKey); // check this in console

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bce9f6d864b5d68f9342f5c815b85f04`;
            const response = await fetch(url);

            if (!response.ok) {
                alert("City not found");
                console.error("Fetch error:", response.status, response.statusText);
                return;
            }

            const data = await response.json();
            console.log(data);
            // if(!response.ok){
            //     alert(data.message);
            //     return;
            // }
            const icon=allIcons[data.weather[0].icon]|| clear_icon;
            setWeatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon,
            })
        }catch(error){
            setWeatherData(false);
            console.error(error);
        }
    }
    useEffect(()=>{
        search("london");
    },[])
  return (
       <div className="weather">
        <div className="search-bar">
            <input  ref={inputRef} type='text' placeholder='search'/>
            <i className="fa-solid fa-magnifying-glass" onClick={()=>{
                search(inputRef.current.value)
            }}></i>
        </div>
        {weatherData?<>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt=''/>
                <div>
                    <p>{weatherData.humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt=''/>
                <div>
                    <p>{weatherData.windSpeed}km/hr</p>
                    <span>wind speed</span>
                </div>
            </div>
        </div>
        </>:<></>}
        
       </div>
  )
}

export default Weather
