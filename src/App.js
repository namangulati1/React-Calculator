import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>React Calculator</h1>
      </nav>
      <Calculator />
    </div>
  );
}

export default App;
