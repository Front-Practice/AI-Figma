import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;