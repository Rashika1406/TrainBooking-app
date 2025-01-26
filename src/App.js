import React, { useState } from 'react';
import FormPage from './FormPage';
import TrainSelectionPage from './TrainSelectionPage';
import PassengerDetailsPage from './PassengerDetailsPage';
import SummaryPage from './SummaryPage';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleTrainSelect = (train) => {
    setSelectedTrain(train);
  };

  const handlePassengerDetailsSubmit = (details) => {
    setPassengerDetails(details);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">Train Ticket Booking App</h1>
      {!formData && (
        <FormPage onSubmit={handleFormSubmit} />
      )}
      {formData && !selectedTrain && (
        <TrainSelectionPage
          from={formData.from}
          to={formData.to}
          onSelect={handleTrainSelect}
        />
      )}
      {formData && selectedTrain && !passengerDetails && (
        <PassengerDetailsPage
          trainNumber={selectedTrain.number}
          onSubmit={handlePassengerDetailsSubmit}
        />
      )}
      {formData && selectedTrain && passengerDetails && (
        <SummaryPage
          formData={formData}
          train={selectedTrain}
          passengerDetails={passengerDetails}
        />
      )}
    </div>
  );
};

export default App;
