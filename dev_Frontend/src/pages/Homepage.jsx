import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import presentation from "../assets/pr2.png";
import eau from "../assets/EAU.png";

const FadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Homepage() {
  return (
    <main>
      {/* Section Hero */}
      <motion.section
        variants = {FadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-screen h-[calc(100vh-6rem)] mt-8 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("${presentation}")` }}
      >
        {/* Overlay sombre */
        <div className="absolute inset-0 bg-black/30"></div>
        }

        {/* Contenu centré */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-bold drop-shadow-lg text-[clamp(1.8rem,5vw,3.5rem)] select-none">
            Bienvenue chez Instal Services
          </h1>
          <p className="mt-4 drop-shadow-md text-[clamp(1rem,2.5vw,1.5rem)] select-none">
            Votre projet de piscine commence ici
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-black hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 text-[clamp(0.9rem,2.2vw,1.1rem)] py-[clamp(0.6rem,1.5vw,1rem)] px-[clamp(1rem,3vw,1.5rem)]"
            >
              Demander un devis gratuit
            </Link>
            <Link
              to="/projets"
              className="bg-white hover:bg-gray-100 text-teal-700 font-semibold rounded-xl shadow-lg transition transform hover:scale-105 text-[clamp(0.9rem,2.2vw,1.1rem)] py-[clamp(0.6rem,1.5vw,1rem)] px-[clamp(1rem,3vw,1.5rem)]"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={FadeInUp}
        initial="hidden"
        whileInView="visible"
        animate={{
          backgroundPosition: ["50% 50%", "55% 55%", "50% 50%"]
        }}
        transition={{
          duration: 0.8,          // transition du fadeInUp
          delay: 0.2,             // petit délai avant apparition
          backgroundPosition: {   // animation du fond
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true }}
        className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-cover bg-center pb-25"
        style={{ backgroundImage: `url("${eau}")` }}
      >

        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-black/40 text-white px-6 py-2 rounded-xl drop-shadow-lg inline-block select-none">
            Pourquoi choisir Instal Services ?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 select-none">Expertise Locale</h3>
            <p className="select-none">
              Avec des années d'expérience dans la région, nous comprenons
              parfaitement les besoins spécifiques de nos clients.
            </p>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 select-none">Service Personnalisé</h3>
            <p className="select-none">
              Chaque projet est unique. Nous travaillons en étroite
              collaboration avec vous pour réaliser votre vision.
            </p>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 select-none">Qualité et Fiabilité</h3>
            <p className="select-none">
              Nous utilisons des matériaux de haute qualité et respectons les
              délais pour garantir votre satisfaction totale.
            </p>
          </div>
        </div>
      </motion.section>
      <section 
        >
      </section>
    </main>
  );
}
