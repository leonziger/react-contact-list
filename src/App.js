import React from 'react';
import './App.css';
import { MoviesProvider } from './components/MoviesProvider';
import { ContactsList } from './components/ContactsList';

function App() {
  return (
      <MoviesProvider>
        <div className="App">
            <ContactsList />
        </div>
      </MoviesProvider>
  );
}

export default App;
