import React from 'react';
import calendarIcon from  '../assets/BirthIcon.svg'
import genderIcon from '../assets/FemaleIcon.svg';
import phoneIcon from '../assets/PhoneIcon.svg';
import emergencyIcon from '../assets/InsuranceIcon.svg';
import insuranceIcon from '../assets/InsuranceIcon.svg';


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
      <li className="flex items-center gap-2">
  <img src={calendarIcon} alt="Calendar" className="w-7 h-7" />
  <strong>Date of Birth:</strong> {data.date_of_birth}
</li>
<li className="flex items-center gap-2">
  <img src={genderIcon} alt="Gender" className="w-7 h-7" />
  <strong>Gender:</strong> {data.gender}
</li>
<li className="flex items-center gap-2">
  <img src={phoneIcon} alt="Phone" className="w-7 h-7" />
  <strong>Phone:</strong> {data.phone_number}
</li>
<li className="flex items-center gap-2">
  <img src={emergencyIcon} alt="Emergency" className="w-7 h-7" />
  <strong>Emergency:</strong> {data.emergency_contact}
</li>
<li className="flex items-center gap-2">
  <img src={insuranceIcon} alt="Insurance" className="w-5 h-5" />
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

