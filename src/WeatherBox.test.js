import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherBox from './WeatherBox';

import {
  getTemperatureColor,
  getHumidityColor,
  getWindSpeedColor,
  getPrecipitationColor,
} from './colorCodingFunctions';

const mockWeatherData = {
  temperature: {
    Morning: 13,
  },
  precipitation: {
    Morning: 2,
  },
  humidity: {
    Morning: 85,
  },
  windSpeed: {
    Morning: 25,
  },
  weatherDescription: {
    Morning: 'Light rain shower',
  },
};

describe('WeatherBox', () => {
  test('Renders date and time correctly', () => {
    render(
      <WeatherBox
        time="Morning"
        weatherData={mockWeatherData}
        date="Today"
      />
    );
    const dateAndTimeElement = screen.getByText("Today's weather: Morning");
    expect(dateAndTimeElement).toBeInTheDocument();
  });

  test('renders weather description correctly', () => {
    render(
      <WeatherBox
        time="Morning"
        weatherData={mockWeatherData}
        date="Today"
      />
    );

    const weatherDescriptionElement = screen.getByText('Weather description: Light rain shower');
    expect(weatherDescriptionElement).toBeInTheDocument();
    });


    test('Renders temperature correctly', () => {
      render(
        <WeatherBox
          time="Morning"
          weatherData={mockWeatherData}
          date="Today"
        />
      );
  
      const temperatureParentElement = screen.getByText('Temperature:');
    //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
      const temperatureElement = temperatureParentElement.querySelector('span');
  
      expect(temperatureElement).toHaveClass(getTemperatureColor(mockWeatherData.temperature.Morning));
      expect(temperatureElement).toHaveTextContent('13°C');
    });
    test('Renders humidity correctly', () => {
      render(
        <WeatherBox
          time="Morning"
          weatherData={mockWeatherData}
          date="Today"
        />
      );
  
      const humidityParentElement = screen.getByText('Humidity:');
    //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
      const humidityElement = humidityParentElement.querySelector('span');
  
      expect(humidityElement).toHaveClass(getHumidityColor(mockWeatherData.humidity.Morning));
      expect(humidityElement).toHaveTextContent('85%');
    });
    test('Renders windspeed correctly', () => {
        render(
          <WeatherBox
            time="Morning"
            weatherData={mockWeatherData}
            date="Today"
          />
        );
    
        const windSpeedParentElement = screen.getByText('Wind Speed:');
      //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
        const windSpeedElement = windSpeedParentElement.querySelector('span');
    
        expect(windSpeedElement).toHaveClass(getWindSpeedColor(mockWeatherData.windSpeed.Morning));
        expect(windSpeedElement).toHaveTextContent('25km/h');
      });
      test('Renders precipitation correctly', () => {
        render(
          <WeatherBox
            time="Morning"
            weatherData={mockWeatherData}
            date="Today"
          />
        );
    
        const precipitationParentElement = screen.getByText('Precipitation:');
      //   I need to select parent elements because getByText doesn't work with the span elements inside the p element.
        const precipitationElement = precipitationParentElement.querySelector('span');
    
        expect(precipitationElement).toHaveClass(getPrecipitationColor(mockWeatherData.precipitation.Morning));
        expect(precipitationElement).toHaveTextContent('2mm');
      });
      
})
