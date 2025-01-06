import React from 'react';
import productImage from '../assets/hero.jpg'; 
import shoes from '../assets/shoes1.jpg'
const HeroSection = () => {
  return (
    <section className="relative bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
    
        <div className="w-full p-5 md:w-1/2">
          <img src={productImage} alt="Product" className="w-full  h-auto rounded-lg " />
        </div>

      
        <div className="w-full p-5 md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Shaping the Future with Innovation
          </h1>
          <p className="text-lg text-gray-600 mb-8">
          We are dedicated to pushing boundaries by crafting innovative solutions that meet your unique needs. Our focus on advanced technologies and creative thinking drives us to provide new perspectives and deliver exceptional results, exceeding your expectations at every step.
          </p>
          <div className='flex mb-5 gap-5'>

  <img src={shoes} alt="Shoe 1" className="w-32 ml-32 md:ml-0 h-auto" />
</div>

          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              Buy now
            </button>
            <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              To shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
