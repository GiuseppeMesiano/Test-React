import React, { useState, useEffect } from 'react';

const defaultNotes = [
  { day: 7, note: 'imparare Svelte' },
  { day: 10, note: 'creare Vite 2.0' },
  { day: 16, note: 'sistemare cicalino' },
  { day: 22, note: 'abolire le campane' },
  { day: 30, note: 'meeting con la gang di Michele' }
];

function Note({ day, note }) {
  return (
    <div className="note-block bg-purple-200 text-purple-800 rounded p-3 mb-4 shadow-md">
      <p className="font-semibold">{note}</p>
    </div>
  );

}

function App() {
  const [day, setDay] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(defaultNotes);
  }, []);

  const handleInsertNote = () => {
    if (day >= 1 && day <= 31 && note !== '') {
      const updatedNotes = [...notes];
      const existingNote = updatedNotes.find((n) => n.day === day);

      if (existingNote) {
        existingNote.note = note;
      } else {
        updatedNotes.push({ day, note });
      }

      setNotes(updatedNotes);
      setDay('');
      setNote('');
    }
  };

  const renderNotes = () => {
    const renderedNotes = [];

    for (let i = 1; i <= 31; i++) {
      const note = notes.find((n) => n.day === i);
      const noteText = note ? note.note : '';

      renderedNotes.push(<Note key={i} day={i} note={noteText} />);
    }

    return renderedNotes;
  };

  return (
    <div className="bg-gray-100 mx-auto w-screen">

      <h1 className="m-auto rounded-md shadow-md text-4xl font-extrabold mb-6 bg-purple-200 w-fit p-6 text-center text-black">
        Calendario con note
      </h1>
      <div className="max-w-fit mx-auto shadow-md p-6 bg-slate-200">
        <div className="flex justify-center gap-4 items-center mb-4">
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(parseInt(e.target.value))}
            placeholder="Giorno (1-31)"
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Inserisci una nota"
            className="border border-gray-300 rounded-r px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleInsertNote}
            className="px-4 py-2 ml-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 ease-in-out"
          >
            Inserisci
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {renderNotes().map((note, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-gray-300 rounded shadow-sm"
            >
              {note}
            </div>
          ))}
        </div>

      </div>
    </div>

  )
}

export default App;
