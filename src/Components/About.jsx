import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
import ceo from "../assets/ceom.png"
import ceo2 from "../assets/ceof.jpg"

const About = () => {
    return (
        <div>
            <Navber></Navber>

            <div className="container mx-auto p-6 mt-20 mb-10 bg-white rounded-lg shadow-lg ">

  
  <section className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-700">Our Mission</h2>
    <p className="mt-4 text-lg text-gray-600 text-justify max-w-3xl mx-auto">
      We are a passionate team dedicated to creating innovative solutions that solve real-world problems. Our mission is to deliver exceptional products and services that enhance the lives of our customers and make a positive impact in the community.
    </p>
  </section>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex flex-col items-center text-center">
      <img 
        src={ceo}
        alt="Team Member" 
        className="w-48 h-48 rounded-full object-cover shadow-lg"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-700"> Mark Johnson</h3>
      <p className="text-lg text-gray-500">Co-Founder & CEO</p>
      <p className="mt-4 text-lg text-gray-600">
        John is a visionary leader with over 10 years of experience in the tech industry. He is passionate about developing innovative products and leading a talented team towards success. In his free time, John enjoys hiking and photography.
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img 
        src={ceo2}
        alt="Team Member" 
        className="w-48 h-48 rounded-full object-cover shadow-lg"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-700">Emily Davis</h3>
      <p className="text-lg text-gray-500">Chief Operating Officer</p>
      <p className="mt-4 text-lg text-gray-600">
        Jane is a results-driven professional with a strong background in operations management. She excels in streamlining processes and ensuring efficient team collaboration. Outside of work, Jane loves cooking and traveling.
      </p>
    </div>
  </section>

  <section className="text-center mt-16">
    <h2 className="text-3xl font-bold text-gray-700 mb-6">Join Our Team</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      We are always looking for talented individuals who are passionate about making a difference. If you're interested in joining our team, feel free to reach out to us through our contact page.
    </p>
    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
      Contact Us
    </button>
  </section>
</div>


            <Footer></Footer>
        </div>
    );
};

export default About;