import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import Navber from './Navber';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Equipmentlist = () => {
    const { user } = useContext(Authcontext); 
    const [equipmentData, setEquipmentData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
const navigate = useNavigate()
useEffect(() => {
    if (user && user.email) { 
        fetch(`https://sport-server-side.vercel.app/equipment/user/${user.email}`)
            .then(res => res.json()) 
            .then(data => {
                setEquipmentData(data); 
            })
            .catch(error => {
                console.error("Error fetching equipment data:", error); 
            });
    }
}, [user]);






    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sport-server-side.vercel.app/equipment/${id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
    
                      
                        const remainingEquipment = equipmentData.filter(item => item._id !== id);
                        setEquipmentData(remainingEquipment);
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Error",
                        text: "There was an issue deleting the item.",
                        icon: "error"
                    });
                });
            }
        });
    };

   

    return (
        <>
            <Navber />
            <div className="md:w-10/12 mx-auto min-h-screen w-full justify-center items-center mt-24 mb-10">
  <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
    List of Available Equipment
  </h1>
  {equipmentData.length === 0 ? (
    <p className="text-center text-xl text-gray-600"><Loading></Loading></p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Item Name</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Rating</th>
            <th className="py-3 px-6 text-left">Customization</th>
            <th className="py-3 px-6 text-left">Processing Time</th>
            <th className="py-3 px-6 text-left">Stock Status</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((equipment) => (
            <tr key={equipment._id} className="border-b hover:bg-gray-100">
              <td className="py-4 px-6">
                <img
                  src={equipment.image}
                  alt={equipment.itemName}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </td>
              <td className="py-4 px-6">{equipment.itemName}</td>
              <td className="py-4 px-6">${equipment.price}</td>
              <td className="py-4 px-6 text-red-500 font-bold">{equipment.rating}</td>
              <td className="py-4 px-6">{equipment.customization}</td>
              <td className="py-4 px-6">{equipment.processingTime}</td>
              <td className="py-4 px-6">{equipment.stockStatus} available</td>
              <td className="py-4 px-6 flex gap-4">
                <NavLink to={`/equipmentlist/update/${equipment._id}`} className="flex-grow">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Update
                  </button>
                </NavLink>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleDelete(equipment._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

            <Footer />
        </>
    );
};

export default Equipmentlist;
