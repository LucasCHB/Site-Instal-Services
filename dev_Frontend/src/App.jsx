import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Import des pages */
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Actus from './pages/Actus';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Legal from './pages/Legal';

/* Import des composants */
import Navbar from './components/Navbar';

function App() {;

  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/actus" element={<Actus />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
