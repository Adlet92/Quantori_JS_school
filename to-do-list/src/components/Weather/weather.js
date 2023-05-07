
import './weather.css';

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  function showPosition(positions){
    var lat = positions.coords.latitude;
    var long = positions.coords.longitude;
    weather.fetchWeather(lat + " " + long);
  }
  
  let weather = {
      apiKey : "8fea051a312349ab8b7174641231504",
      fetchWeather: function(city){
          fetch(
              "http://api.weatherapi.com/v1/current.json?key="+ this.apiKey + "&q="+ city +"&aqi=no"
          )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data));
      },
      displayWeather: function(data){
          const {name} = data.location;
          const {temp_c} = data.current;
          const {icon} = data.current.condition;
          document.getElementById("city-name").innerText = name;
          document.getElementById("temp").innerText = temp_c + "°";
          document.getElementById("weather-icon").src = icon;
      }
  }
  weather.fetchWeather("Tbilisi");