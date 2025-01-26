

// import React from 'react';

// const TrainSelectionPage = ({ from, to, onSelect }) => {
//   const trains = [
//     { number: '123A', name: 'Express Line 1' },
//     { number: '456B', name: 'Express Line 2' },
//     { number: '789C', name: 'Express Line 3' },
//     { number: '101D', name: 'Express Line 4' },
//   ];

//   return (
//     <div>
//       <h2>Select a Train from {from} to {to}</h2>
//       {trains.map((train) => (
//         <div key={train.number}>
//           <img src={`images/${train.number}.jpg`} alt={train.name} />
//           <p>{train.name} ({train.number})</p>
//           <button onClick={() => onSelect(train)}>Select</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TrainSelectionPage;

  import React from 'react';
  import train1 from './assets/images/train1.jfif'
  import train2 from './assets/images/train2.jfif'
  import train3 from './assets/images/train3.jfif'
  import train4 from './assets/images/train4.jfif'
  
  const TrainSelectionPage = ({ from, to,onSelect }) => {
    const trains = [
      {  number: '123A',name: 'Express Line 1', image: train1 },
      {  number: '456B',name: 'Express Line 2', image: train2 },
      {  number: '789C',name: 'Express Line 3', image: train3 },
      { number: '101D',name: 'Express Line 4', image: train4 },
    ];
  
    return (
      <>
      <h2 className="font-bold text-2xl">Select a Train from {from} to {to}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trains.map((train) => (
          <div key={train.number} className="p-4 shadow-md bg-white rounded">
            <img
              src={train.image}
              alt={`Train ${train.number}`}
              className="w-50 h-40 object-cover mb-4"
            />
            <h3>{train.name} ({train.number})</h3>
            <div className="flex justify-between items-center">
              <span className="font-bold">Train: {train.number}</span>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => onSelect(train)}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };
  
  export default TrainSelectionPage;