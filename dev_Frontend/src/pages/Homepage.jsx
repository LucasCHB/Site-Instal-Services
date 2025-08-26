import { Link } from "react-router-dom";
import presentation from "../assets/presentation.png";

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
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Bienvenue chez Instal Services
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            Votre projet de piscine commence ici
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-black hover:bg-black text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
            <Link
              to="/projets"
              className="bg-white hover:bg-gray-100 text-teal-700 font-semibold py-3 px-6 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

