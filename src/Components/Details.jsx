import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navber from "./Navber";

const Details = () => {
  const { id } = useParams(); 
  const data = useLoaderData(); 

  if (!data) {
    return <p>Loading... or Data Not Found</p>;
  }

  return (
<>
<Navber></Navber>
<div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left Section: Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={data.image}
            alt={data.itemName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-1/2 p-8 space-y-6 flex flex-col justify-between">
          {/* Product Name */}
          <h1 className="text-4xl font-bold text-gray-800">{data.itemName}</h1>

          {/* Category */}
          <p className="text-lg text-gray-600">
            <span className="font-medium">Category:</span> {data.categoryName}
          </p>
          <p className="text-lg text-gray-600">
            {data.description}
          </p>
          {/* Price */}
          <p className="text-3xl font-semibold text-green-500">
            ${data.price}
          </p>

          {/* Rating */}
          <p className="text-lg text-gray-700">
            <span className="font-medium">Rating:</span> {data.rating}/5
          </p>

          {/* Stock Status */}
          <p className="text-lg text-gray-700">
            <span className="font-medium">In Stock:</span> {data.stockStatus}
          </p>

          {/* Customization */}
          <p className="text-lg text-gray-700">
            <span className="font-medium">Customization:</span> {data.customization}
          </p>

          {/* Processing Time */}
          <p className="text-lg text-gray-700">
            <span className="font-medium">Processing Time:</span> {data.processingTime}
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-5">
            <button className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg hover:bg-orange-700 transition duration-300">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white text-lg rounded-lg hover:bg-gray-900 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>


</>
  );
};

export default Details;
