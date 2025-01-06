import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from './Footer';
import Navber from './Navber';
import { Authcontext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {
  const { user } = useContext(Authcontext);
  const { id } = useParams(); 
  const data = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
  
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
  
    const updatedInfo = {
      image,
      itemName,
      categoryName,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName
    };
  fetch(`https://sport-server-side.vercel.app/equipment/${id}`,{
     method:'PATCH',
     headers: {
        'Content-Type': 'application/json'
    },
     body:JSON.stringify(updatedInfo)
  })
  .then(res=>res.json())
  .then((data) => {
    // console.log('Update Response:', data);

    if (data.modifiedCount > 0) { 
      Swal.fire({
        title: 'Success!',
        text: 'Your Item has been Updated Successfully!',
        icon: 'success',
      });
    } else if (data.matchedCount === 0) { 
      Swal.fire({
        title: 'Not Found!',
        text: 'No matching item found for the update.',
        icon: 'warning',
      });
    } else { 
      Swal.fire({
        title: 'No Changes!',
        text: 'The data you provided is the same as the existing data.',
        icon: 'info',
      });
    }
  })

  };
  

  return (
    <>
      <Navber></Navber>
      <section className="mt-20">
        <div className=" w-full p-5 md:w-10/12 mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-center">Update Equipment</h1>
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="text"
                  name="image"
                  defaultValue={data?.image || ''}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  defaultValue={data?.itemName || ''}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Category Name</label>
                <input
                  type="text"
                  name="categoryName"
                  defaultValue={data?.categoryName || ''}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={data?.price || ''}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={data?.rating || ''}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="customization" className="block text-sm font-medium text-gray-700">Customization</label>
                <input
                  type="text"
                  name="customization"
                  defaultValue={data?.customization || ''}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700">Processing Time</label>
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={data?.processingTime || ''}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700">Stock Status</label>
                <input
                  type="number"
                  name="stockStatus"
                  defaultValue={data?.stockStatus || ''}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User Email</label>
                <input
                  type="email"
                  name="userEmail"
                  value={user.email}
                  readOnly
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full bg-gray-100"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={user.displayName}
                  readOnly
                  className="mt-2 p-3 border border-gray-300 rounded-lg w-full bg-gray-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-orange-500 font-semibold text-white rounded-lg  transition duration-300"
            >
              Update Equipment
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Update;
