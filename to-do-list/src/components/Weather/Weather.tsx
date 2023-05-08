import { useState, useEffect } from "react";
import './weather.css'
import {WeatherData} from '../Interfaces/interfaces'

const apiKey = "8fea051a312349ab8b7174641231504";


const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);

  useEffect(() => {
    const getLocationAndWeather = async () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          fetch(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`
          )
            .then(res => res.json())
            .then(result => {
              setWeather(result);
            })
            .catch(error => {
              console.log(error);
              fetch(
                `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tbilisi&aqi=no`
              )
                .then(res => res.json())
                .then(result => {
                  setWeather(result);
                });
            });
        }, error => {
          console.log(error);
          fetch(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tbilisi&aqi=no`
          )
            .then(res => res.json())
            .then(result => {
              setWeather(result);
            });
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
        fetch(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tbilisi&aqi=no`
        )
          .then(res => res.json())
          .then(result => {
            setWeather(result);
          });
      }
    }
    getLocationAndWeather();
  }, []);

  return (
    <> 
      {weather?.current?.condition?.icon && (
        <img src={`http:${weather.current.condition.icon}`} alt="Weather icon" id="weather-icon" className="weather-icon"/>
      )}
      {weather?.current?.temp_c && (
        <h4 id="temp" className="temp">{weather.current.temp_c}°C</h4>
      )}
      <h4 id="city-name" className="city-name">{weather?.location.name}</h4>
    </>     
  );
};

export default Weather;

