import React from 'react';
import male1 from '../assets/male.png'
import male2 from '../assets/male2.png'
import f1 from '../assets/female1.png'
import f2 from '../assets/female2.png'

const Review = () => {
    return (
        <div>
           <section className="py-10 p-5 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">
      What Our Users Are Saying
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Review 1 */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <p className="text-gray-600 mb-4">
          "This website has been an amazing resource! The design is user-friendly, and I found exactly what I needed in no time."
        </p>
        <div className="flex items-center justify-center">
          <img src={male1} alt="User" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h5 className="font-semibold text-gray-800">John Doe</h5>
     
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-lg">
        <p className="text-gray-600 mb-4">
          "A great experience! The checkout process was smooth, and I got my order quickly. Highly recommend!"
        </p>
        <div className="flex items-center justify-center">
          <img src={f1} alt="User" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h5 className="font-semibold text-gray-800">Jane Smith</h5>

          </div>
        </div>
      </div>

      {/* Review 3 */}
      <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
        <p className="text-gray-600 mb-4">
          "I was blown away by the customer service. They answered all my questions quickly, and the product was exactly as described."
        </p>
        <div className="flex items-center justify-center">
          <img src={male2} alt="User" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h5 className="font-semibold text-gray-800">Robert Lee</h5>
   
          </div>
        </div>
      </div>

      {/* Review 4 */}
      <div className="bg-pink-50 p-6 rounded-lg shadow-lg">
        <p className="text-gray-600 mb-4">
          "Absolutely fantastic! The layout is beautiful, and I had no issues navigating the site. I will definitely shop here again."
        </p>
        <div className="flex items-center justify-center">
          <img src={f2} alt="User" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h5 className="font-semibold text-gray-800">Emily Brown</h5>
      
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
    );
};

export default Review;