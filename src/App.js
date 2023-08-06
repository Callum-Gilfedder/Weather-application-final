import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherBox from './WeatherBox';

function WeatherApp() {
  const [responseData, setResponseData] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [todaysWeatherData, setTodaysWeatherData] = useState(null) 
  const [tomorrowsWeatherData, setTomorrowsWeatherData] = useState(null) 
  const [dayAfterTomorrowsWeatherData, setDayAfterTomorrowsWeather] = useState(null)
  // Using two states for this might be not the cleanest way to update state without triggering useEffect?
  const [userLocationInput, setUserLocationInput] = useState("");
  const [location, setLocation] = useState("")
  const [apiCallStatus, setApiCallStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const timeSlots = ["Morning", "Noon", "Evening", "Night"] 


  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://wttr.in/' + location + '?format=j1';
    setLoading(true);
    // Fetch weather data using Axios
    axios.get(apiUrl)
      .then(response => {
        console.log(apiUrl)
        setApiCallStatus(true)
        setResponseData(response.data)
        const extractedData = extractWeatherData(response.data);
        setCurrentWeatherData(extractedData.currentWeather);
        setTodaysWeatherData(extractedData.todaysWeather)
        setTomorrowsWeatherData(extractedData.tomorrowsWeather)
        setDayAfterTomorrowsWeather(extractedData.dayAfterTomorrowsWeather)
        
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setApiCallStatus(false)
      })
      .finally(
        setLoading(false)
      );
  }, [location]);

  console.log(responseData)

  function handleClick(event) {
    setLocation(userLocationInput)
  }

  function handleChange(event) {
    setUserLocationInput(event.target.value)
  }

  // Function to extract relevant information
  function extractWeatherData(rawData) { 
    const weatherData = {
        currentWeather : {
          location: rawData.nearest_area[0].areaName[0].value,
          weatherDescription: rawData.current_condition[0].weatherDesc[0].value,
          temperature: rawData.current_condition[0].temp_C,
          precipitation: rawData.current_condition[0].precipMM,
          humidity: rawData.current_condition[0].humidity,
          windSpeed: rawData.current_condition[0].windspeedKmph
        },
          
        todaysWeather: {
          weatherDescription: {
            Morning: rawData.weather[0].hourly[2].weatherDesc[0].value, 
            Noon: rawData.weather[0].hourly[4].weatherDesc[0].value,
            Evening: rawData.weather[0].hourly[6].weatherDesc[0].value,
            Night: rawData.weather[0].hourly[7].weatherDesc[0].value, 
          },

          temperature: {
            Morning: rawData.weather[0].hourly[2].tempC, 
            Noon: rawData.weather[0].hourly[4].tempC,
            Evening: rawData.weather[0].hourly[6].tempC,
            Night: rawData.weather[0].hourly[7].tempC, 
          },
          precipitation: {
            Morning: rawData.weather[0].hourly[2].precipMM, 
            Noon: rawData.weather[0].hourly[4].precipMM,
            Evening: rawData.weather[0].hourly[6].precipMM,
            Night: rawData.weather[0].hourly[7].precipMM, 
          },
          humidity: {
            Morning: rawData.weather[0].hourly[2].humidity, 
            Noon: rawData.weather[0].hourly[4].humidity,
            Evening: rawData.weather[0].hourly[6].humidity,
            Night: rawData.weather[0].hourly[7].humidity, 
          }, 
          windSpeed: {
            Morning: rawData.weather[0].hourly[2].windspeedKmph, 
            Noon: rawData.weather[0].hourly[4].windspeedKmph,
            Evening: rawData.weather[0].hourly[6].windspeedKmph,
            Night: rawData.weather[0].hourly[7].windspeedKmph, 
          }, 
        },

        tomorrowsWeather: {
          weatherDescription: {
            Morning: rawData.weather[1].hourly[2].weatherDesc[0].value, 
            Noon: rawData.weather[1].hourly[4].weatherDesc[0].value,
            Evening: rawData.weather[1].hourly[6].weatherDesc[0].value,
            Night: rawData.weather[1].hourly[7].weatherDesc[0].value, 
          },

          temperature: {
            Morning: rawData.weather[1].hourly[2].tempC, 
            Noon: rawData.weather[1].hourly[4].tempC,
            Evening: rawData.weather[1].hourly[6].tempC,
            Night: rawData.weather[1].hourly[7].tempC, 
          },
          precipitation: {
            Morning: rawData.weather[1].hourly[2].precipMM, 
            Noon: rawData.weather[1].hourly[4].precipMM,
            Evening: rawData.weather[1].hourly[6].precipMM,
            Night: rawData.weather[1].hourly[7].precipMM, 
          },
          humidity: {
            Morning: rawData.weather[1].hourly[2].humidity, 
            Noon: rawData.weather[1].hourly[4].humidity,
            Evening: rawData.weather[1].hourly[6].humidity,
            Night: rawData.weather[1].hourly[7].humidity, 
          }, 
          windSpeed: {
            Morning: rawData.weather[1].hourly[2].windspeedKmph, 
            Noon: rawData.weather[1].hourly[4].windspeedKmph,
            Evening: rawData.weather[1].hourly[6].windspeedKmph,
            Night: rawData.weather[1].hourly[7].windspeedKmph, 
          }, 
        },

        dayAfterTomorrowsWeather: {
          weatherDescription: {
            Morning: rawData.weather[2].hourly[2].weatherDesc[0].value, 
            Noon: rawData.weather[2].hourly[4].weatherDesc[0].value,
            Evening: rawData.weather[2].hourly[6].weatherDesc[0].value,
            Night: rawData.weather[2].hourly[7].weatherDesc[0].value, 
          },

          temperature: {
            Morning: rawData.weather[2].hourly[2].tempC, 
            Noon: rawData.weather[2].hourly[4].tempC,
            Evening: rawData.weather[2].hourly[6].tempC,
            Night: rawData.weather[2].hourly[7].tempC, 
          },
          precipitation: {
            Morning: rawData.weather[2].hourly[2].precipMM, 
            Noon: rawData.weather[2].hourly[4].precipMM,
            Evening: rawData.weather[2].hourly[6].precipMM,
            Night: rawData.weather[2].hourly[7].precipMM, 
          },
          humidity: {
            Morning: rawData.weather[2].hourly[2].humidity, 
            Noon: rawData.weather[2].hourly[4].humidity,
            Evening: rawData.weather[2].hourly[6].humidity,
            Night: rawData.weather[2].hourly[7].humidity, 
          }, 
          windSpeed: {
            Morning: rawData.weather[2].hourly[2].windspeedKmph, 
            Noon: rawData.weather[2].hourly[4].windspeedKmph,
            Evening: rawData.weather[2].hourly[6].windspeedKmph,
            Night: rawData.weather[2].hourly[7].windspeedKmph, 
          }, 
        
        },
      }
    return weatherData
    ;
  };

  return (
    <div>
      <h1>Weather Data </h1>
      <input type="text" placeholder='Enter search location...' onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
      {loading ? <h1> Loading... </h1>: null}

      {location !== "" ? (apiCallStatus ? <p>Weather successfully found for {location}</p> : <p> Search failed for {location}</p>) : null}
      {/* Display simplified weather data */}
      {currentWeatherData && (
        <div>
          <h1>Current Weather Conditions</h1>
            <p>Location: {currentWeatherData.location}</p>          
            <p>Weather description: {currentWeatherData.weatherDescription}</p>
            <p>Temperature: {currentWeatherData.temperature} degrees C</p>
            <p>Precipitation: {currentWeatherData.precipitation}mm</p>
            <p>Humidity: {currentWeatherData.humidity}%</p>
            <p>Wind Speed: {currentWeatherData.windSpeed}km/h</p>



          <div className='grid-container'>
          {timeSlots.map((timeSlot) => (
                <WeatherBox weatherData={todaysWeatherData} time={timeSlot} />
            ))}
          {timeSlots.map((timeSlot) => (
                <WeatherBox weatherData={tomorrowsWeatherData} time={timeSlot} />
            ))}
          {timeSlots.map((timeSlot) => (
                <WeatherBox weatherData={dayAfterTomorrowsWeatherData} time={timeSlot} />
            ))}    

          </div>
        </div>
            

      )}

          
    </div>
  );
}

export default WeatherApp;
