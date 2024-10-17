import { MapPin } from 'lucide-react';
import React from 'react';


const BusinessCard = ({ title, name, description, profileImage, callToAction }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header: Title and Subtitle */}
      <div className="p-6 bg-gray-100 text-center">
        <img src="/images/Redeso-Logo.png" alt="rideso logo" className='m-auto max-h-10' />
        <hr />
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <hr />
        {/* <p className="text-gray-500 text-sm">{name}</p> */}
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-center justify-center -mt-7">
        <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg bg-sophie bg-cover"></div>
        <h1 className="text-2xl font-bold text-gray-900">Sophie Arika</h1>
        <p className="text-gray-500 text-sm">Director - Rideso Enterprises</p>
      </div>

      {/* Description */}
      <div className="p-6 text-center">
        <p className="text-gray-700">{description}</p>
        <div className='flex justify-center items-center gap-1 text-gray-700 text-sm mt-2'>
            <MapPin size="14px" />
        <p>Swan Centre, 1st Floor, Kindaruma Road</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-2 p-4">
  <a
    href="https://wa.me/254724980023"
    className="inline-block text-center w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium shadow hover:bg-gray-200"
  >
    Call me
  </a>
  <a
    href="mailto:info@ridesoenterprise.com"
    className="inline-block text-center w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium shadow hover:bg-gray-200"
  >
    Email
  </a>
  <a
    href="https://www.linkedin.com/in/sophie-arika/"
    className="inline-block text-center w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium shadow hover:bg-gray-200"
  >
    LinkedIn
  </a>
</div>

    </div>
  );
};


export default BusinessCard;
