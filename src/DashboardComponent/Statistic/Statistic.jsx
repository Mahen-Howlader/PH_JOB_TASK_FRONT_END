import React from 'react';

function Statistic(props) {
  return (
    <div>
      <div className="relative w-52 h-72 border border-gray-300 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product" className="w-full h-full h-3/5 object-cover" />

        <div className="p-4 text-center absolute  bottom-0 ">
          <h3 className="text-lg font-semibold">Product Name</h3>
          <p className="text-gray-700">$25.00</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center p-5 transform translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-2">
            Add to Cart
          </button>
          <p className="text-sm">20% Off!</p>
        </div>
      </div>
    </div>
  );
}

export default Statistic;