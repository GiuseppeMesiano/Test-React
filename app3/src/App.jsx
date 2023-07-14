import React, { useState } from 'react';
import getCharacters from './components/characters';

function Home({ characters, setCharacter }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Personaggi cinematografici famosi
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {characters.map((character, index) => (
          <div key={index} className="bg-gray-200 rounded shadow-md p-6">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-[200px] object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setCharacter(character)}
            >
              More info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CharacterDetails({ character, setCharacter }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{character.name}</h1>
      <img src={character.image} alt={character.name} className="w-full mb-6 rounded" />
      <p className="text-lg mb-6">{character.description}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setCharacter(null)}
      >
        Back
      </button>
    </div>
  );
}

function App() {
  const characters = getCharacters();
  const [character, setCharacter] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      {character ? (
        <CharacterDetails character={character} setCharacter={setCharacter} />
      ) : (
        <Home characters={characters} setCharacter={setCharacter} />
      )}
    </div>
  );
}

export default App;


/*senza route*/