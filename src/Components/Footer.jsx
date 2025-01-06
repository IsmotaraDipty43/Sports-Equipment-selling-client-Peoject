import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({theme}) => {
    return (
        <footer className={` text-white py-10  ${theme === 'dark' ? 'bg-gray-900 ' : 'bg-gray-800'}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 p-5  gap-8">
     
        <div>
          <h1 className="text-2xl font-bold">EquiSports</h1>
          <p className="mt-2 text-gray-400">
            Your one-stop shop for premium sports equipment and gear.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>Email: support@equisports.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Sports Lane, Fitness City</li>
          </ul>
        </div>
        <div>
  <h2 className="text-xl font-bold">Useful Links</h2>
  <ul className="mt-2 text-gray-400 space-y-2">
  <li>
      <Link to="/" className=" transition duration-300">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className=" transition duration-300">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/equipment" className=" transition duration-300">
        All Sports Equipment
      </Link>
    </li>

  
   
  </ul>
</div>

  
        <div>
          <h2 className="text-xl font-bold">Follow Us</h2>
          <ul className="flex mt-4 space-x-4">
            <li>
              <a
                href="https://facebook.com/equisports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white  hover:text-white"
              >
                
 
<i className="fa-brands fa-facebook text-3xl"></i>
              </a>
            </li>
            <li>
            <a
                href="https://facebook.com/equisports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white  hover:text-white"
              >
                
 
                <i className="fa-brands fa-twitter text-3xl"></i>
              </a>
            </li>
            <li>
            <a
                href="https://facebook.com/equisports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white  hover:text-white"
              >
                
                <i className="fa-brands fa-instagram text-3xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr  className='m-5'/>
      <div className="mt-3 font-bold text-center text-gray-500">
        &copy; 2024 EquiSports. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;