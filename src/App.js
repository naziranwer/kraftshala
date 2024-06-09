import React, { useState } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import { fetchWeatherData } from './api';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchWeather = async (location) => {
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError('Unable to fetch weather data. Please try again.');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <SearchBar fetchWeather={fetchWeather} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className='flex justify-center items-center'>{weatherData && <WeatherCard weatherData={weatherData} />}</div>
    </div>
  );
}

export default App;
