import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Droplets,
  Wrench,
  Shield,
  Clock,
  Users,
  Award
} from "lucide-react";
import presentation from "../assets/pr2.png";
import eau from "../assets/EAU.png";

const FadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const FadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

// Données pour les sections
const services = [
  {
    icon: Droplets,
    title: "Traitement automatique",
    description: "Installation d'équipements de filtration et traitement automatique pour une eau cristalline en permanence",
    features: ["Électrolyse au sel", "Dosage automatique", "Régulation pH"]
  },
  {
    icon: Wrench,
    title: "Installation pompes",
    description: "Pose et maintenance de pompes haute performance adaptées à votre bassin",
    features: ["Pompes à vitesse variable", "Systèmes silencieux", "Garantie constructeur"]
  },
  {
    icon: Shield,
    title: "Pose de liner",
    description: "Revêtement de qualité professionnelle pour une étanchéité parfaite et durable",
    features: ["Liner premium", "Pose garantie", "Conseils personnalisés"]
  }
];

const stats = [
  { number: "500+", label: "Projets réalisés", icon: CheckCircle },
  { number: "15", label: "Ans d'expérience", icon: Award },
  { number: "98%", label: "Clients satisfaits", icon: Star },
  { number: "24h", label: "Délai de réponse", icon: Clock }
];

const testimonials = [
  {
    name: "Marie & Jean Dupont",
    location: "Romans-Sur-Isère",
    rating: 5,
    comment: "Installation parfaite de notre système de traitement automatique. Équipe professionnelle et très réactive !",
    project: "Traitement automatique"
  },
  {
    name: "Sophie Martin",
    location: "Bourg-de-Péage", 
    rating: 5,
    comment: "Notre spa fonctionne parfaitement depuis 2 ans. Service après-vente excellent, je recommande vivement !",
    project: "Installation spa"
  },
  {
    name: "Pierre Rousseau",
    location: "Valence",
    rating: 5,
    comment: "Pose de liner impeccable et équipe très professionnelle. Travail soigné dans les délais annoncés.",
    project: "Pose de liner"
  }
];

export default function Homepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Rotation automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Section Hero */}
      <motion.section
        variants={FadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-screen h-[calc(100vh-6rem)] mt-8 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("${presentation}")` }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenu centré */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-bold drop-shadow-lg text-[clamp(2rem,5vw,4rem)] select-none mb-6"
          >
            Bienvenue chez Instal Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 drop-shadow-md text-[clamp(1.1rem,2.5vw,1.8rem)] select-none mb-2"
          >
            Votre projet de piscine commence ici
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="drop-shadow-md text-[clamp(0.9rem,2vw,1.2rem)] opacity-90 select-none mb-8"
          >
            Installation • Maintenance • Conseil • Qualité garantie
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group bg-white hover:bg-teal-400  text-black font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 text-[clamp(0.9rem,2.2vw,1.1rem)] py-[clamp(0.8rem,1.8vw,1.2rem)] px-[clamp(1.2rem,3.5vw,2rem)] flex items-center justify-center gap-2"
            >
              <Phone className="text-black w-5 h-5" />
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
            </Link>
            <Link
              to="/Projets"
              className="group bg-white/95 hover:bg-teal-400 text-teal-700 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 text-[clamp(0.9rem,2.2vw,1.1rem)] py-[clamp(0.8rem,1.8vw,1.2rem)] px-[clamp(1.2rem,3.5vw,2rem)] flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Voir nos réalisations
            </Link>
          </motion.div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section Nos Services */}
      <motion.section
        variants={FadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'installation à la maintenance, nous vous accompagnons dans tous vos projets aquatiques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={FadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Pourquoi nous choisir (améliorée) */}
      <motion.section
        variants={FadeInUp}
        initial="hidden"
        whileInView="visible"
        animate={{
          backgroundPosition: ["50% 50%", "55% 55%", "50% 50%"]
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          backgroundPosition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        viewport={{ once: true }}
        className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url("${eau}")` }}
      >
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2 
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="bg-black/50 text-white px-8 py-4 rounded-2xl drop-shadow-lg inline-block select-none">
              Pourquoi choisir Instal Services ?
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Expertise Locale",
                description: "Avec des années d'expérience dans la région, nous comprenons parfaitement les besoins spécifiques de nos clients."
              },
              {
                icon: Users,
                title: "Service Personnalisé", 
                description: "Chaque projet est unique. Nous travaillons en étroite collaboration avec vous pour réaliser votre vision."
              },
              {
                icon: Shield,
                title: "Qualité et Fiabilité",
                description: "Nous utilisons des matériaux de haute qualité et respectons les délais pour garantir votre satisfaction totale."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? FadeInLeft : FadeInRight}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/95 backdrop-blur-sm text-black rounded-2xl shadow-xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 select-none group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="select-none leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Statistiques */}
          <motion.div
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-teal-600 mb-1">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section Témoignages */}
      <motion.section
        variants={FadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Leur satisfaction est notre meilleure référence
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>
              <div className="text-lg font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-600 flex items-center justify-center gap-2 mt-2">
                <MapPin className="w-4 h-4" />
                {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].project}
              </div>
            </motion.div>

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-teal-600 scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section Dernières actualités */}
      <motion.section
        variants={FadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dernières Actualités
              </h2>
              <p className="text-xl text-gray-600">
                Restez informé de nos dernières réalisations et conseils
              </p>
            </div>
            <Link
              to="/actus"
              className="hidden md:flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
            >
              Voir toutes les actualités
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Nouvelle réalisation à Bordeaux",
                excerpt: "Une superbe piscine familiale avec filtration écologique...",
                image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop",
                category: "Réalisation",
                date: "15 Août 2024"
              },
              {
                title: "Conseils pour l'hivernage",
                excerpt: "Protégez efficacement votre bassin pendant l'hiver...",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
                category: "Conseils",
                date: "10 Août 2024"
              },
              {
                title: "Promo spéciale printemps",
                excerpt: "10% de réduction sur nos installations jusqu'au 30 avril...",
                image: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&h=250&fit=crop",
                category: "Promotion",
                date: "5 Août 2024"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                variants={FadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    to="/actus"
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 group-hover:gap-3 transition-all duration-300"
                  >
                    Lire plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lien mobile */}
          <div className="text-center mt-12 md:hidden">
            <Link
              to="/actus"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors"
            >
              Voir toutes les actualités
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Section Contact rapide */}
      <motion.section
        variants={FadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-teal-600 to-blue-600"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Prêt à démarrer votre projet ?
          </motion.h2>
          <motion.p
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl opacity-90 mb-12 leading-relaxed"
          >
            Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit. 
            Nos experts vous accompagnent de A à Z dans votre projet.
          </motion.p>

          <motion.div
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Appelez-nous</h3>
              <a href="tel:+33123456789" className="bg-white border border-gray-200 hover:border-teal-300 text-teal-600 hover:text-teal-700 transition-all duration-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md text-sm font-medium">
                01 23 45 67 89
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:contact@instal-services.fr" className="bg-white border border-gray-200 hover:border-teal-300 text-teal-600 hover:text-teal-700 transition-all duration-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md text-sm font-medium">
                contact@instal-services.fr
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Zone d'intervention</h3>
              <p className="text-lg">Rhône-Alpes et alentours</p>
            </div>
          </motion.div>

          <motion.div
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Devis gratuit en 24h
            </Link>
            <Link
              to="/Prestations"
              className="border-2 border-white bg-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <Wrench className="w-5 h-5" />
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}