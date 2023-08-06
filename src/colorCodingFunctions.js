// These functions are used in the react components to color code the weather information.

export function getTemperatureColor(temperature) {
    if (temperature <= 0) {
        return "blue";
    } else if (temperature <= 10) {
        return "cyan";
    } else if (temperature <= 20) {
        return "green";
    } else if (temperature <= 30) {
        return "yellow";
    } else if (temperature <= 40) {
        return "orange";
    } else {
        return "red";
    }
}

export function getPrecipitationColor(precipitation) {
    if (precipitation <= 0) {
        return "blue";
    } else if (precipitation <= 5) {
        return "green";
    } else if (precipitation <= 10) {
        return "yellow";
    } else if (precipitation <= 20) {
        return "orange";
    } else {
        return "red";
    }
}

export function getHumidityColor(humidity) {
    if (humidity <= 30) {
        return "blue";
    } else if (humidity <= 50) {
        return "green";
    } else if (humidity <= 70) {
        return "yellow";
    } else if (humidity <= 90) {
        return "orange";
    } else {
        return "red";
    }
}

export function getWindSpeedColor(windSpeed) {
    if (windSpeed <= 10) {
        return "blue";
    } else if (windSpeed <= 20) {
        return "green";
    } else if (windSpeed <= 30) {
        return "yellow";
    } else if (windSpeed <= 40) {
        return "orange";
    } else {
        return "red";
    }
}