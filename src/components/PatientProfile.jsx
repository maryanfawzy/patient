import React from 'react';
import profilePic from '../assets/jessica.png';

const PatientProfile = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-72">
      <img src={profilePic} alt="Jessica Taylor" className="rounded-full w-24 h-24 mx-auto" />
      <h2 className="text-center text-xl font-semibold mt-2">Jessica Taylor</h2>
      <ul className="mt-4 text-sm text-gray-700">
        <li><strong>Date of Birth:</strong> Aug 23, 1996</li>
        <li><strong>Gender:</strong> Female</li>
        <li><strong>Phone:</strong> (415) 555-1234</li>
        <li><strong>Emergency:</strong> (415) 555-5678</li>
        <li><strong>Insurance:</strong> Sunrise Health Assurance</li>
      </ul>
      <button className="mt-4 w-full bg-emerald-500 text-white py-2 rounded">Show All Information</button>
    </div>
  );
};

export default PatientProfile;
