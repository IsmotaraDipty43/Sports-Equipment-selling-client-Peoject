import React, { useState, useEffect } from 'react';
import Navber from '../Components/Navber';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import CategoryCards from '../Components/CategorySection';
import HeroSection from '../Components/HeroSection';
import Review from '../Components/Review';
import Productsection from '../Components/Productsection';

const HomeLayout = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navber theme={theme} />
     
      <Banner theme={theme} toggleTheme={toggleTheme} />
     
      <Slider theme={theme} />
      <CategoryCards theme={theme} />
      <HeroSection theme={theme} />
      <Productsection theme={theme} />
      <Review  />
      <Footer theme={theme}  />
    </div>
  );
};

export default HomeLayout;
