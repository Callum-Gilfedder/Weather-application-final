function WeatherBox(props) {
    const time = props.time
    const weatherData = props.weatherData
    return (
        <>
        <div className='grid-item'><h1>Todays weather: {time} </h1>
        <p>Weather description: {weatherData.weatherDescription[time]}</p>
        <p>Temperature: {weatherData.temperature[time]} degrees C</p>
        <p>Precipitation: {weatherData.precipitation[time]}mm</p>
        <p>Humidity: {weatherData.humidity[time]}%</p>
        <p>Wind Speed: {weatherData.windSpeed[time]}km/h</p></div>
        </>
    )
}

export default WeatherBox