// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              MonSite
            </Link>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-500">Accueil</Link>
            <Link to="/services" className="hover:text-blue-500">Services</Link>
            <Link to="/about" className="hover:text-blue-500">À propos</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>

          {/* Bouton mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
