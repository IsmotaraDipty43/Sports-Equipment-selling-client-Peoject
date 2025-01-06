import React from 'react';
import {  useNavigate } from 'react-router-dom'; 
import errorImage from '../assets/notfound.jpg'; 

const Error = () => {
const navigate = useNavigate()

    const goBackHome = () => {
        navigate('/'); 
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <img
                src={errorImage}
                alt="Error"
                className="w-48 h-48 mb-5"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-5">
                Oops! Something went wrong.
            </h1>
            <button
                onClick={goBackHome}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default Error;
