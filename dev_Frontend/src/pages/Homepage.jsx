import { Link } from "react-router-dom";
import presentation from "../assets/pr2.png";

export default function Homepage() {
  return (
    <main>
      {/* Section Hero */}
      <section
        className="relative w-screen h-[calc(100vh-6rem)] mt-8 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("${presentation}")` }}
      >
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Contenu centré */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-bold drop-shadow-lg text-[clamp(1.8rem,5vw,3.5rem)]">
            Bienvenue chez Instal Services
          </h1>
          <p className="mt-4 drop-shadow-md text-[clamp(1rem,2.5vw,1.5rem)]">
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
      </section>
    </main>
  );
}
