import React from 'react';

const PatientProfile = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-72">
      <img
        src={data.profile_picture}
        alt={data.name}
        className="rounded-full w-24 h-24 mx-auto"
      />
      <h2 className="text-center text-xl font-semibold mt-2">
        {data.name}
      </h2>
      <ul className="mt-4 text-sm text-gray-700">
        <li>
          <strong>Date of Birth:</strong> {data.date_of_birth}
        </li>
        <li>
          <strong>Gender:</strong> {data.gender}
        </li>
        <li>
          <strong>Phone:</strong> {data.phone_number}
        </li>
        <li>
          <strong>Emergency:</strong> {data.emergency_contact}
        </li>
        <li>
          <strong>Insurance:</strong> {data.insurance_type}
        </li>
      </ul>
      <button className="mt-4 w-full bg-emerald-500 text-white py-2 rounded">
        Show All Information
      </button>
    </div>
  );
};

export default PatientProfile;

