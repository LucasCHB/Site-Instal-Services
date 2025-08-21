// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

// Import du logo
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
    <header className=" bg-white shadow-md fixed w-full z-20">
      {/*Vague en arriere-plan*/}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"          
          viewBox="0 0 900 600"
          className="w-full h-full"
          preserveAspectRatio="none"
        >

        {/* Dégradé pour la vague */}
      <defs>
        {/* Dégradé principal */}
        <linearGradient id="oceanGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#01497c" />
          <stop offset="100%" stopColor="#00b4d8" />
        </linearGradient>

        {/* Dégradé secondaire (plus clair) */}
        <linearGradient id="oceanGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="100%" stopColor="#90e0ef" />
        </linearGradient>
      </defs>

      {/* Première vague (amplitude forte, couleur foncée) */}
      <path fill="url(#oceanGradient1)" opacity="0.9">
        <animate
          attributeName="d"
          dur="12s"
          repeatCount="indefinite"
          values="
            M0 320C60 460,120 280,180 420C240 560,300 300,360 500C420 700,480 280,540 460C600 640,660 300,720 480C780 660,840 280,900 320V600H0Z;
            M0 500C60 340,120 520,180 360C240 200,300 500,360 320C420 140,480 520,540 360C600 200,660 500,720 340C780 180,840 520,900 500V600H0Z;
            M0 320C60 460,120 280,180 420C240 560,300 300,360 500C420 700,480 280,540 460C600 640,660 300,720 480C780 660,840 280,900 320V600H0Z
          "
        />
      </path>

      {/* Deuxième vague (plus claire et décalée dans le temps) */}
      <path fill="url(#oceanGradient2)" opacity="0.6">
        <animate
          attributeName="d"
          dur="16s"
          begin="2s"
          repeatCount="indefinite"
          values="
            M0 400C60 520,120 360,180 480C240 600,300 340,360 540C420 740,480 320,540 520C600 700,660 340,720 500C780 660,840 320,900 400V600H0Z;
            M0 500C60 300,120 500,180 320C240 140,300 520,360 300C420 100,480 540,540 340C600 160,660 540,720 320C780 120,840 500,900 500V600H0Z;
            M0 400C60 520,120 360,180 480C240 600,300 340,360 540C420 740,480 320,540 520C600 700,660 340,720 500C780 660,840 320,900 400V600H0Z
          "
        />
      </path>
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
