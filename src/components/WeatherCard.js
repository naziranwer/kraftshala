import React from 'react';

const WeatherCard = ({ weatherData }) => {
  
  const getCurrentISTTime = () => {
    const date = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white dark:bg-gray-700 dark:text-white m-4">
      <div className="font-bold text-xl mb-2">{weatherData.name}</div>
      <p className="text-gray-700 dark:text-gray-300 text-base">Temperature: {weatherData.main.temp}°C</p>
      <p className="text-gray-700 dark:text-gray-300 text-base">Humidity: {weatherData.main.humidity}%</p>
      <p className="text-gray-700 dark:text-gray-300 text-base">Wind Speed: {weatherData.wind.speed} m/s</p>
      <p className="text-gray-700 dark:text-gray-300 text-base">Description: {weatherData.weather[0].description}</p>
      <p className="text-gray-700 dark:text-gray-300 text-base">Date: {getCurrentISTTime()}</p>
    </div>
  );
};

export default WeatherCard;

