import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Char } from './components/types';
// import Form from './components/Form';
import List from './components/List';
import { getAllCharacters } from './services/getAllCharacters';

interface AppState {
  chars: Array<Char>
  newSubsNumber: number
}

function App() {
  const [characters, setCharacters] = useState<AppState['chars']>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getAllCharacters().then(setCharacters)
  }, [])

  // const handleNewSub = (newChar: Char): void => {
  //   setCharacters(chars => [...chars, newChar]);
  // }

  return (
    <div className="App" ref={divRef}>
      <h1>Rick and Morty Characters</h1>
      <List characters={characters} />
      {/* <Form onNewSub={handleNewSub}/> */}
    </div>
  );
}

export default App;
