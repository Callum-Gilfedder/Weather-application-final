function SearchBoxAndCurrentWeather(props) {
    const apiCallStatus = props.apiCallStatus
    const location = props.location
    const handleClick = props.handleClick
    const currentWeatherData = props.currentWeatherData
    const handleChange = props.handleChange
    const loading = props.loading

    return (

        <>
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
        </div>
        )} 
    </>
    )
}

export default SearchBoxAndCurrentWeather