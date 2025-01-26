
// import React, { useState } from 'react';

// const FormPage = ({ onSubmit }) => {
//   const [username, setUsername] = useState('');
//   const [phone, setPhone] = useState('');
//   const [tickets, setTickets] = useState(1);
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ username, phone, tickets, from, to });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         required
//       />
//       <input
//         type="number"
//         placeholder="Number of Tickets"
//         value={tickets}
//         onChange={(e) => setTickets(e.target.value)}
//         min="1"
//         required
//       />
//       <input
//         type="text"
//         placeholder="From"
//         value={from}
//         onChange={(e) => setFrom(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="To"
//         value={to}
//         onChange={(e) => setTo(e.target.value)}
//         required
//       />
//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default FormPage;
import React, { useState } from 'react';

const FormPage = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [tickets, setTickets] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, phone, tickets, from, to });
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <div className="mb-4">
        <label className="block font-medium">Username:</label>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Phone Number:</label>
        <input
          type="tel"
          placeholder="Enter your PhoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
   </div>
  <div className="mb-4">
   <label className="block font-medium">Number of Tickets:</label>
  <input
          type="number"
          placeholder="Enter your Tickets"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          className="w-full border rounded px-2 py-1"
          min="1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">From:</label>
        <input
          type="text"
          value={from}
          placeholder="From"
          onChange={(e) => setFrom(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">To:</label>
        <input
          type="text"
          value={to}
          placeholder="To"
          onChange={(e) => setTo(e.target.value)}
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

export default FormPage;