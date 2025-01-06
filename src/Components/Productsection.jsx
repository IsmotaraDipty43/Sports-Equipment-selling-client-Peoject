import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Productsection = ({theme}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       
     
          fetch('https://sport-server-side.vercel.app/equipment') 
            .then((response) => response.json())
            .then((data) => {
              setProducts(data); 
            })
            .catch((error) => {
              console.error("Error fetching products:", error); 
            });
        
    
      
      }, []);

  return (
<section className={`p-5 ${theme === 'light' ? 'bg-[#f3f4f6]' : "bg-gray-900"} `}>

    <div className="container mx-auto p-6 mb-10">
      <h1 className={`text-4xl font-bold  text-center mb-4 ${theme === 'light' ? 'text-gray-800' : "text-white"} `}>
        Explore Our Top Sports Equipment
      </h1>
      <p className={`text-lg text-gray-600 text-center mb-8 ${theme === 'light' ? 'text-gray-600' : "text-white"} `}>
        Discover the best quality sports equipment for all your needs. From professional-grade gear to budget-friendly options, we’ve got you covered!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.length > 0 ? (
          products.slice(0, 6).map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.itemName}
                className="w-full h-96 rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">{product.itemName}</h3>
              <p className=" mb-2 text-black">Brand: {product.categoryName}</p>
              <p className="text-lg font-bold text-black">${product.price}</p>
              <div className="mt-4">
                <NavLink to={`details/${product._id}`}>
                <button
                
                  className="px-4 py-2 bg-orange-500 font-semibold text-white rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  View Details
                </button>
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg">No products available</p>
        )}
      </div>
    </div>
</section>
  );
};

export default Productsection;





