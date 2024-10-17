import React from 'react';
import BusinessCard from './BusinessCard1';

const App = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-around bg-gray-50 p-6 overflow-hidden">
      {/* Card 1 */}
      <BusinessCard
        title="Rideso Enterprises"
        name="STYLIST FOR MEN"
        description="Supply of Laboratory Equipment, Water Quality Equipment & General Supply"
        profileImage="/images/sophie.jpg"
        callToAction={['Call me', 'Email', 'Instagram']}
      />

    </div>
  );
};

export default App;
