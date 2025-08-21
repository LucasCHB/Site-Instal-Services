// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import logo from "../assets/new-logo.png";

// Variants pour l'animation du container
const navVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Variants pour chaque lien mobile
const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/actus", label: "Actualités" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative bg-white shadow-md fixed w-full z-20">
      {/*Vague en arriere-plan*/}
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"          
          viewBox="0 0 900 601"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#0284c7" //Couleur de la vague (actuellement bleu océan)
            fillOpacity="1"
            d="M0 397L21.5 412.8C43 428.7 86 460.3 128.8 474.2C171.7 488 214.3 484 257.2 474.8C300 465.7 343 451.3 385.8 452C428.7 452.7 471.3 468.3 514.2 472.8C557 477.3 600 470.7 642.8 460.8C685.7 451 728.3 438 771.2 444.3C814 450.7 857 476.3 878.5 489.2L900 502L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" //forme de la vague
          ></path>
        </svg>
      </div>

      {/*Contenu de la Navbar*/}      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo collé à gauche */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Logo Instal Services" 
              className="h-[80px] w-auto mt-2.5 ml-0" 
            />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 items-center font-medium text-gray-700 text-2xl">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bouton mobile animé */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-8 w-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-8 w-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <motion.nav className="flex flex-col space-y-2 p-4 font-medium text-gray-700">
              {navLinks.map((item) => (
                <motion.div key={item.to} variants={linkVariants}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="relative block hover:text-blue-500 after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
