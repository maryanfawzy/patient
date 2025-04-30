
import React, { useEffect, useState } from 'react';
import PatientProfile from '../components/PatientProfile';
import BloodPressureChart from '../components/BloodPressureChart';
import { fetchJessicaData } from '../api/Patients'

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
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Tech.Care</h1>
        <ul className="space-y-2">
          <li className="p-2 rounded bg-emerald-100 font-semibold">Jessica Taylor</li>
          <li className="p-2 rounded hover:bg-gray-100">Emily Williams</li>
          <li className="p-2 rounded hover:bg-gray-100">Ryan Johnson</li>
          <li className="p-2 rounded hover:bg-gray-100">Brandon Mitchell</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">HealthCare Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Dr. Jose Simmons</span>
            <img src={jessica.image} alt="Doctor" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left: Chart + Vitals */}
          <div className="col-span-2 space-y-4">
            <BloodPressureChart />
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-2xl font-bold">{jessica?.vitals?.respiratoryRate} bpm</p>
                <p className="text-sm text-gray-500">Respiratory Rate</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-2xl font-bold">{jessica?.vitals?.temperature}°F</p>
                <p className="text-sm text-gray-500">Temperature</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-2xl font-bold">{jessica?.vitals?.heartRate} bpm</p>
                <p className="text-sm text-gray-500">Heart Rate</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
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
                  {jessica?.diagnosis?.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2">{item.problem}</td>
                      <td className="py-2">{item.description}</td>
                      <td className="py-2">{item.status}</td>
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
                <li className="flex justify-between items-center">
                  <span>Blood Tests</span>
                  <button className="text-emerald-500 font-semibold">Download</button>
                </li>
                <li className="flex justify-between items-center">
                  <span>CT Scans</span>
                  <button className="text-emerald-500 font-semibold">Download</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;