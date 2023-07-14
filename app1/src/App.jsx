import React, { useState } from 'react';

function App() {
  const [marioVoto, setMarioVoto] = useState(3);
  const [luigiVoto, setLuigiVoto] = useState(3);

  function handleMarioVotoChange(e) {
    setMarioVoto(Number(e.target.value));
  }

  function handleLuigiVotoChange(e) {
    setLuigiVoto(Number(e.target.value));
  }

  let message;
  if (marioVoto > luigiVoto) {
    message = 'Mario Rossi è in vantaggio';
  } else if (marioVoto < luigiVoto) {
    message = 'Luigi Verdi è in vantaggio';
  } else {
    message = 'Mario Rossi e Luigi Verdi sono pari';
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <div className='w-fit p-6 bg-white shadow-lg'>
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          <span className="border-b-4 border-blue-500 pb-1">
            Confronto Voti
          </span>
        </h1>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="marioVoto" className="block mb-1 font-semibold text-red-600 text-lg">
              <span className="mr-1">Voto Mario Rossi</span>
              <span className="text-xs text-gray-500">(da 1 a 10)</span>
            </label>
            <input
              type="number"
              id="marioVoto"
              min={1}
              max={10}
              value={marioVoto}
              onChange={handleMarioVotoChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="marioVoto" className="block mb-1 font-semibold text-green-600 text-lg">
              <span className="mr-1">Voto Luigi Verdi</span>
              <span className="text-xs text-gray-500">(da 1 a 10)</span>
            </label>
            <input
              type="number"
              id="luigiVoto"
              min={1}
              max={10}
              value={luigiVoto}
              onChange={handleLuigiVotoChange}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold text-slate-600 bg-blue-200 rounded-md p-4">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
