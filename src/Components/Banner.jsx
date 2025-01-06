import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal'; 
import { Tooltip as ReactTooltip } from 'react-tooltip'
import banner from '../assets/ball.png';

const Banner = ({ theme, toggleTheme }) => {
    return (
        <div className={`md:h-[500px] mt-20 lg:h-[680px] flex justify-center items-center ${theme === 'light' ? 'bg-[#f3ebf6]' : "bg-white"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:w-10/12 mx-auto w-full">
                <div className="space-y-5 flex flex-col justify-center items-start">
                    {/* Apply Fade animation to the heading */}
                    <Fade bottom cascade>
                        <h1 className={`lg:text-5xl md:text-3xl text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : "text-black"}`}>
                            Unleash Your Potential with EquiSports!
                        </h1>
                    </Fade>

                    {/* Apply Slide animation to the paragraph */}
                    <Slide left>
                        <p className={`text-xl ${theme === 'light' ? 'text-black' : "text-black"}`}>
                            Step into a world of premium sports gear and accessories at EquiSports. Designed for athletes of all levels, we bring you the finest selection of equipment, apparel, and essentials to elevate your performance.
                        </p>
                    </Slide>

                    {/* Toggle Button with Tooltip */}
                    <button
                        onClick={toggleTheme}
                        className={`px-4 py-2 btn rounded-full transition text-lg ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
                        
                    >
                        <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
  ◕‿‿◕  Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
</a>
                       
                    </button>

                    {/* Tooltip Component */}
                    <ReactTooltip effect="solid" />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src={banner}
                        className="w-full h-auto"
                        alt="Sports Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
