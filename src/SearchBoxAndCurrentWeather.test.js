import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBoxAndCurrentWeather from './SearchBoxAndCurrentWeather';
import { getTemperatureColor, getHumidityColor, getPrecipitationColor, getWindSpeedColor } from './colorCodingFunctions';


const mockCurrentWeatherData = {
  location: 'New York',
  weatherDescription: 'Sunny',
  temperature: 25,
  precipitation: 2.0,
  humidity: 60,
  windSpeed: 15,
};

describe('SearchBoxAndCurrentWeather', () => {
  test('Renders location correctly', () => {
    render(
      <SearchBoxAndCurrentWeather
        apiCallStatus={true}
        location="New York"
        handleClick={() => {}}
        currentWeatherData={mockCurrentWeatherData}
        handleChange={() => {}}
        loading={false}
      />
    );

    const locationElement = screen.getByText('Weather forecast for New York');

    expect(locationElement).toBeInTheDocument()
    
  });
  test('Renders location correctly', () => {
    render(
      <SearchBoxAndCurrentWeather
        apiCallStatus={true}
        location="New York"
        handleClick={() => {}}
        currentWeatherData={mockCurrentWeatherData}
        handleChange={() => {}}
        loading={false}
      />
    );

    const locationElement = screen.getByText('Weather forecast for New York');
    expect(locationElement).toBeInTheDocument()
  })
    test('Renders current weather description correctly', () => {
        render(
          <SearchBoxAndCurrentWeather
            apiCallStatus={true}
            location="New York"
            handleClick={() => {}}
            currentWeatherData={mockCurrentWeatherData}
            handleChange={() => {}}
            loading={false}
          />
        );
    
        const locationElement = screen.getByText('Weather description: Sunny');
        expect(locationElement).toBeInTheDocument()
    });
    test('Renders current temperature correctly', () => {
        render(
            <SearchBoxAndCurrentWeather
            apiCallStatus={true}
            location="New York"
            handleClick={() => {}}
            currentWeatherData={mockCurrentWeatherData}
            handleChange={() => {}}
            loading={false}
          />
        );
    
        const temperatureParentElement = screen.getByText('Temperature:');
      //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
        const temperatureElement = temperatureParentElement.querySelector('span');
    
        expect(temperatureElement).toHaveClass(getTemperatureColor(mockCurrentWeatherData.temperature));
        expect(temperatureElement).toHaveTextContent('25°C');
      });
      test('Renders current precipitation correctly', () => {
        render(
            <SearchBoxAndCurrentWeather
            apiCallStatus={true}
            location="New York"
            handleClick={() => {}}
            currentWeatherData={mockCurrentWeatherData}
            handleChange={() => {}}
            loading={false}
          />
        );
    
        const precipitationParentElement = screen.getByText('Precipitation:');
      //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
        const precipitationElement = precipitationParentElement.querySelector('span');
    
        expect(precipitationElement).toHaveClass(getPrecipitationColor(mockCurrentWeatherData.precipitation));
        expect(precipitationElement).toHaveTextContent('2mm');
      });
      test('Renders current humidity correctly', () => {
        render(
            <SearchBoxAndCurrentWeather
            apiCallStatus={true}
            location="New York"
            handleClick={() => {}}
            currentWeatherData={mockCurrentWeatherData}
            handleChange={() => {}}
            loading={false}
          />
        );
    
        const humidityParentElement = screen.getByText('Humidity:');
      //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
        const humidityElement = humidityParentElement.querySelector('span');
    
        expect(humidityElement).toHaveClass(getHumidityColor(mockCurrentWeatherData.humidity));
        expect(humidityElement).toHaveTextContent('60%');
      });
      test('Renders current wind speed correctly', () => {
        render(
            <SearchBoxAndCurrentWeather
            apiCallStatus={true}
            location="New York"
            handleClick={() => {}}
            currentWeatherData={mockCurrentWeatherData}
            handleChange={() => {}}
            loading={false}
          />
        );
    
        const windSpeedParentElement = screen.getByText('Wind speed:');
      //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
        const windSpeedElement = windSpeedParentElement.querySelector('span');
    
        expect(windSpeedElement).toHaveClass(getWindSpeedColor(mockCurrentWeatherData.windSpeed));
        expect(windSpeedElement).toHaveTextContent('15km/h');
      });
})