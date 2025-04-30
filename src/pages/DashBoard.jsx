

import React, { useEffect, useState } from 'react';
import PatientProfile from '../components/PatientProfile';
import BloodPressureChart from '../components/BloodPressureChart';
import { fetchJessicaData } from '../api/Patients';
import doctorImage from '../assets/senior-woman.png';
import heartIcon from '../assets/HeartBPM.svg';
import tempIcon from '../assets/temperature.svg';
import respIcon from '../assets/resp.svg'

const Dashboard = () => {
  const [jessica, setJessica] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchJessicaData();
      setJessica(data);
    };
    getData();
  }, []);

  if (!jessica) {
    return <div className="p-10 text-center">Loading Jessica's data...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/5 bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Tech.Care</h1>
        <ul className="space-y-2">
          <li className="p-2 rounded bg-emerald-100 font-semibold">Jessica Taylor</li>
          <li className="p-2 rounded hover:bg-gray-100">Emily Williams</li>
          <li className="p-2 rounded hover:bg-gray-100">Ryan Johnson</li>
          <li className="p-2 rounded hover:bg-gray-100">Brandon Mitchell</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-2xl font-semibold">HealthCare Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Dr. Jose Simmons</span>
            <img src={doctorImage} alt="Doctor" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Chart + Vitals */}
          <div className="lg:col-span-2 space-y-4">
            <BloodPressureChart diagnosisHistory={jessica.diagnosis_history} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  {/* Respiratory Rate */}
  <div className="bg-blue-100 p-4 rounded-lg text-center">
    <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center mb-2">
      <img src={respIcon} alt="Respiratory Rate" className="w-12 h-12" />
    </div>
    <p className="text-gray-500 text-sm">Respiratory Rate</p>
    <p className="text-2xl font-bold">{jessica.diagnosis_history[0].respiratory_rate.value} bpm</p>
    <p className="text-sm text-gray-600">{jessica.diagnosis_history[0].respiratory_rate.levels}</p>
  </div>

  {/* Temperature */}
  <div className="bg-red-100 p-4 rounded-lg text-center">
    <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center mb-2">
      <img src={tempIcon} alt="Temperature" className="w-12 h-12" />
    </div>
    <p className="text-gray-500 text-sm">Temperature</p>
    <p className="text-2xl font-bold">{jessica.diagnosis_history[0].temperature.value}°F</p>
    <p className="text-sm text-gray-600">{jessica.diagnosis_history[0].temperature.levels}</p>
  </div>

  {/* Heart Rate */}
  <div className="bg-pink-100 p-4 rounded-lg text-center">
    <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center mb-2">
      <img src={heartIcon} alt="Heart Rate" className="w-12 h-12" />
    </div>
    <p className="text-gray-500 text-sm">Heart Rate</p>
    <p className="text-2xl font-bold">{jessica.diagnosis_history[0].heart_rate.value} bpm</p>
    <p className="text-sm text-gray-600">⬇ {jessica.diagnosis_history[0].heart_rate.levels}</p>
  </div>
</div>


            <div className="bg-white p-4 rounded shadow overflow-x-auto">
              <h3 className="text-lg font-semibold mb-2">Diagnostic List</h3>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-600">
                    <th className="py-2">Problem/Diagnosis</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jessica.diagnostic_list.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2 whitespace-nowrap">{item.name}</td>
                      <td className="py-2 whitespace-nowrap">{item.description}</td>
                      <td className="py-2 whitespace-nowrap">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Profile and Lab */}
          <div className="space-y-4">
            <PatientProfile data={jessica} />
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Lab Results</h3>
              <ul className="text-sm space-y-2">
                {jessica.lab_results.map((result, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{result}</span>
                    <button className="text-emerald-500 font-semibold">Download</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;