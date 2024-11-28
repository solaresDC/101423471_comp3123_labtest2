import React, { useState, useEffect } from 'react';
import axios from 'axios';


const WeatherApp = () => {

  const [city, setCity] = useState('Toronto');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (!city) return;

    setLoading(true);
    setError(null);
    axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid : "ba590eaa28c9204e92f77dd651afeb4b"
      }
    })
      .then((response) => response.data)
      .then((data) => {
        setWeatherInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        setError('Failed to fetch weather data');
        setLoading(false);
      });
  }, [city]); 


  const handleCChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmition = (e) => {
    e.preventDefault();
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://display.blogto.com/articles/20201211-sunset.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
  };
  const weatherInfoStyle = {
    background: 'black',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '20px auto',
    textAlign: 'center',
  };



  return (
    <div style={backgroundStyle}>
      <h1>Weather App</h1>

      <form onSubmit={handleSubmition}>
        <input
          type="text"
          value={city}
          onChange={handleCChange}
          placeholder="Enter city"
        />
      </form>
      
      {error && <p>{error}</p>}

      {weatherInfo && !loading && !error && (
        <div style={weatherInfoStyle}>
          <h2>{weatherInfo.name}</h2>
          <p>{weatherInfo.weather[0].description}</p>
          <p>{Math.round(weatherInfo.main.temp - 273.15).toFixed(2)}°C</p>
          { <img
            src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          /> }
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
