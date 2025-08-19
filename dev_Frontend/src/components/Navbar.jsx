// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/New Logo.png"; // Assure-toi que le fichier n'a pas d'espaces

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo Instal Services" className="h-[100px] w-auto mr-auto mt-2.5" />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 items-center font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-500">Accueil</Link>
            <Link to="/services" className="hover:text-blue-500">Services</Link>
            <Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link>
            <Link to="/actus" className="hover:text-blue-500">Actualités</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>

          {/* Bouton mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec transition */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-2 p-4 font-medium text-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/actus" onClick={() => setIsOpen(false)}>Actualités</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
