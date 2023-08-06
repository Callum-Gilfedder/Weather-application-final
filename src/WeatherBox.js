import { getTemperatureColor, getHumidityColor, getWindSpeedColor, getPrecipitationColor } from "./colorCodingFunctions"


function WeatherBox(props) {
    const time = props.time
    const weatherData = props.weatherData
    const date = props.date

    
    
    return (
        <>
        <div className='grid-item'>
            <div className="grid-inner-container">
                <h1> {date}'s weather: {time} </h1>
                <p>  Weather description:  {weatherData.weatherDescription[time]} </p>
                <p >Temperature: <span className={getTemperatureColor(weatherData.temperature[time])}> {weatherData.temperature[time]}&deg;C </span></p>
                <p>Precipitation: <span className={getPrecipitationColor(weatherData.precipitation[time])}>{weatherData.precipitation[time]}mm</span></p>
                <p>Humidity: <span className={getHumidityColor(weatherData.humidity[time])}>{weatherData.humidity[time]}%</span></p>
                <p>Wind speed: <span className={getWindSpeedColor(weatherData.windSpeed[time])}>{weatherData.windSpeed[time]}km/h</span></p>
            </div>
        </div>
        </>
    )
}

export default WeatherBox