import React, { useState } from 'react';

const SearchBar = ({ fetchWeather }) => {
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center my-4">
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter city or zip code" 
        className="p-2 rounded-l w-64 border"
      />
      <button type="submit" className="p-2 bg-blue-500 dark:bg-gray-800 text-white rounded-r">Search</button>
    </form>
  );
};

export default SearchBar;
