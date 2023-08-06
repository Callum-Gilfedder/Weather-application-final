import { getTemperatureColor, getHumidityColor, getWindSpeedColor, getPrecipitationColor } from "./colorCodingFunctions"

function SearchBoxAndCurrentWeather(props) {
    const apiCallStatus = props.apiCallStatus
    const location = props.location
    const handleClick = props.handleClick
    const currentWeatherData = props.currentWeatherData
    const handleChange = props.handleChange
    const loading = props.loading

    return (

        <>
        <div className="top-container">
            <div className="column">
                <h2> Weather forecast for {currentWeatherData !== null && currentWeatherData.location}</h2>
                <input type="text" placeholder='Enter search location...' onChange={handleChange}></input>
                <button onClick={handleClick}>Search</button>
                {loading ? <h1> Loading... </h1>: null}

                {location !== "" ? (apiCallStatus ? <p className="green">Weather successfully found for {location}</p> : <p className="red"> Search failed for {location}</p>) : null}
            </div>
            <div className="column">
                {/* Display simplified weather data */}
                {currentWeatherData && (
                    <div>
                    <h1>Current Weather Conditions</h1>
                        <p>Weather description: <span className="white"> {currentWeatherData.weatherDescription} </span></p>
                        <p>Temperature: <span className={getTemperatureColor(currentWeatherData.temperature)}>{currentWeatherData.temperature}&deg;C</span></p>
                        <p>Precipitation: <span className={getPrecipitationColor(currentWeatherData.precipitation)}> {currentWeatherData.precipitation}mm</span></p>
                        <p>Humidity:  <span className={getHumidityColor(currentWeatherData.humidity)}>{currentWeatherData.humidity}%</span></p>
                        <p>Wind Speed:  <span className={getWindSpeedColor(currentWeatherData.windSpeed)}>{currentWeatherData.windSpeed}km/h</span></p>
                    </div>
                    
                    )} 
            </div>
        </div>
    </>
    )
}

export default SearchBoxAndCurrentWeather