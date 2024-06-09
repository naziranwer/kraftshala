import React from 'react';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 dark:bg-gray-800 text-white">
      <h1 className="text-2xl">Weather App</h1>
      <button 
        onClick={toggleDarkMode} 
        className="bg-gray-700 dark:bg-gray-200 dark:text-black text-white py-1 px-3 rounded"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
