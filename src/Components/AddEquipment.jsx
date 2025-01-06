import React, { useContext } from 'react';
import Navber from './Navber';
import Footer from './Footer';
import { Authcontext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const AddEquipment = () => {
  const { user } = useContext(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const price = (form.price.value);
    const description = form.description.value;
    const rating = (form.rating.value);
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = (form.stockStatus.value);

    const userEmail = user?.email || 'default@gmail.com';
    const userName = user?.displayName || 'Default User';

    const allInfo = {
      image,
      itemName,
      categoryName,
      price,
      description,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
    };


    fetch('https://sport-server-side.vercel.app/equipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allInfo),
    })
      .then((response) => response.json())
      .then((data) => {

        if (data.insertedId) {
          Swal.fire({
            title: 'Wow!',
            text: 'Your Item has been Added Successfully!',
            icon: 'success',
          });
        } else {
          toast.error('Failed to add equipment!');
        }
        form.reset()
      })
      .catch((error) => {
      
        toast.error('An error occurred while adding equipment.');
      });
  };

  return (
    <div>
      <Navber />
      <div className="container mx-auto p-6 mt-10 mb-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">Add Sports Equipment</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <input
                type="text"
                name="image"
                className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Item Name</label>
              <input
                type="text"
                name="itemName"
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                name="categoryName"
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="text"
                name="price"
     
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <input
                name="description"
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              ></input>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <input
                type="text"
                name="rating"
          
                min="0"
                max="5"
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Customization</label>
              <input
                type="text"
                name="customization"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Processing Time</label>
              <input
                type="text"
                name="processingTime"
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Stock Status</label>
              <input
                type="text"
                name="stockStatus"
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">User Email</label>
              <input
                type="email"
                name="userEmail"
                value={user?.email || 'default@gmail.com'}
                readOnly
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full bg-gray-100"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">User Name</label>
              <input
                type="text"
                name="userName"
                value={user?.displayName || 'Default User'}
                readOnly
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full bg-gray-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Equipment
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default AddEquipment;
