import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navber from "./Navber";
import { Link, NavLink } from "react-router-dom";
import Loading from "./Loading";

const Allequipment = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch("https://sport-server-side.vercel.app/equipment") 
      .then((response) => response.json())
      .then((data) => {
        setEquipment(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error); 
      });
  }, []);


  const sortByPriceAsc = () => {
    const sortedEquipment = [...equipment].sort((a, b) => a.price - b.price);
    setEquipment(sortedEquipment);
  };

  return (
    <>
      <Navber></Navber>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Explore Our Sports Equipment
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-semibold text-center mb-8">
          Explore our complete inventory of sports equipment, including product
          details and options to view more information.
        </p>

        {/* Sort Button */}
        <div className="text-center mb-6">
          <button
            onClick={sortByPriceAsc}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-black text-sm sm:text-base font-bold rounded-full transition duration-300"
          >
            Sort by Price
          </button>
        </div>

        {/* Equipment Table */}
        <div className="overflow-x-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {equipment.length > 0 ? (
      equipment.map((item) => (
        <div
          key={item._id}
          className="border border-gray-300 p-4 rounded-md shadow-lg hover:shadow-xl transition duration-300"
        >
          <img
            src={item.image}
            alt={item.itemName}
            className="w-full h-56  rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.itemName}</h3>
          <p className="text-sm text-gray-600 mb-2">{item.categoryName}</p>
          <p className="text-sm font-bold text-gray-800 mb-4">${item.price}</p>
          <NavLink to={`details/${item._id}`}>
            <button className="w-full px-4 py-2 bg-orange-500 rounded-full text-white font-bold text-sm sm:text-base transition duration-300">
              View Details
            </button>
          </NavLink>
        </div>
      ))
    ) : (
      <div className="col-span-3 text-center py-4 text-gray-500 text-sm sm:text-base">
<Loading></Loading>      </div>
    )}
  </div>
</div>

      </div>

      <Footer></Footer>
    </>
  );
};

export default Allequipment;
