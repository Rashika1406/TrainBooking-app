import React, { useState } from 'react';

const PassengerDetailsPage = ({ trainNumber, onSubmit }) => {
  const [parents, setParents] = useState(0);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ parents, children });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Train Number: {trainNumber}</h2>
      
      <div className="mb-4">
        <label className="block font-medium">Number of Parents:</label>
        <input
          type="number"
          value={parents}
          onChange={(e) => setParents(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Number of Children:</label>
        <input
          type="number"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default PassengerDetailsPage;