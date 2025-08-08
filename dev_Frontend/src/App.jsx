import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Actus from './pages/Actus';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Legal from './pages/Legal';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message); 
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>Vite + React</h1>
          <p>{message}</p>
          <div className="card">
            <button onClick={() => setCount(count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/actus" element={<Actus />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App
