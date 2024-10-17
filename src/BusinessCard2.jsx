import React from 'react'

export default function BusinessCard2() {
  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* Card Header */}
      <div className="bg-gray-800 text-white text-center p-6 relative">
        <div className="w-48 h-48 lg:w-48 lg:h-48 rounded-full mx-auto border-4 border-white -mt-16 bg-sophie bg-cover"></div>
        <h1 className="text-2xl lg:text-3xl font-bold mt-4">Sophie Arika</h1>
        <p className="text-sm lg:text-base font-light">Director - Rideso Enterprises</p>
      </div>

      {/* Card Body */}
      <div className="p-6 text-center">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Sophie Arika</h2>
        <p className="text-gray-600 text-sm lg:text-base">Director - Rideso Enterprises</p>
        <p className="text-gray-700 mt-4 text-sm lg:text-base">
         Supply of Laboratory Equipment, Water Quality Equipment & General Supply
        </p>
      </div>

      {/* Card Footer */}
      <div className="bg-gray-50 p-4 flex justify-around border-t">
        <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-xs lg:text-sm">Paypal</a>
        <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-xs lg:text-sm">Website</a>
        <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-xs lg:text-sm">LinkedIn</a>
      </div>
    </div>
  )
}
