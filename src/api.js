const API_KEY = process.env.REACT_APP_API_KEY;


export const fetchWeatherData = async (location) => {
  console.log('api key',API_KEY)
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return data;
};
