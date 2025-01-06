import React from 'react';
import img1 from '../assets/footbal.png';
import img2 from '../assets/busketball.jpg';
import img3 from '../assets/tanis.jpg';
import img4 from '../assets/swim.jpeg';
import img5 from '../assets/scycle.jpg';

const CategoryCards = ({theme}) => {
    return (
        <div className={`py-16  ${theme === 'light' ? 'bg-[#f3f4f6]  ' : "bg-gray-900 text-white" }`}>
            {/* Section Heading and Title */}
            <div className="text-center mb-12">
                <h2 className={`text-4xl font-bold mb-4  ${theme === 'light' ? 'text-gray-800  ' : " text-white" }`}>Explore Our Sports Categories</h2>
            <p className={`text-lg ${theme === 'light' ? 'text-gray-600  ' : " text-white" }`}>Browse through a wide range of sports equipment and essentials, tailored for athletes of all levels.</p>
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-8">
                {/* Football Card */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <img src={img1} alt="Football" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">Football Essentials</h2>
                            <p className="text-gray-600 mb-4">Features cleats, jerseys, shin guards, and footballs.</p>
                        </div>
                        <button className="text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600">Go to Category</button>
                    </div>
                </div>

                {/* Basketball Card */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <img src={img2} alt="Basketball" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">Basketball Gear</h2>
                            <p className="text-gray-600 mb-4">Includes basketballs, shoes, wristbands, and apparel.</p>
                        </div>
                        <button className="text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600">Go to Category</button>
                    </div>
                </div>

                {/* Tennis Card */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <img src={img3} alt="Tennis" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">Tennis Equipment</h2>
                            <p className="text-gray-600 mb-4">Offers rackets, balls, and shoes.</p>
                        </div>
                        <button className="text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600">Go to Category</button>
                    </div>
                </div>

                {/* Swimming Card */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <img src={img4} alt="Swimming" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">Swimming Essentials</h2>
                            <p className="text-gray-600 mb-4">Includes swimwear, goggles, and training gear.</p>
                        </div>
                        <button className="text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600">Go to Category</button>
                    </div>
                </div>

                {/* Cycling Card */}
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <img src={img5} alt="Cycling" className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">Cycling Gear</h2>
                            <p className="text-gray-600 mb-4">Features bikes, helmets, and cycling apparel.</p>
                        </div>
                        <button className="text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600">Go to Category</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCards;
