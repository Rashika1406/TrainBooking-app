import React from 'react';

const SummaryPage = ({ formData, train, passengerDetails }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Ticket Details</h2>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Phone Number:</strong> {formData.phone}</p>
      <p><strong>Number of Tickets:</strong> {formData.tickets}</p>
      <p><strong>From:</strong> {formData.from}</p>
      <p><strong>To:</strong> {formData.to}</p>
      <p><strong>Selected Train:</strong> {train.name} ({train.number})</p>
      <p><strong>Number of Parents:</strong> {passengerDetails.parents}</p>
      <p><strong>Number of Children:</strong> {passengerDetails.children}</p>
    </div>
  );
};

export default SummaryPage;