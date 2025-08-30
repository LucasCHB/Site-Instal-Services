import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, ArrowRight, Filter, Star } from "lucide-react";

// Données d'exemple
const articles = [
  {
    id: 1,
    title: "Nouvelle réalisation à Romans-sur-Isère",
    excerpt: "Une superbe piscine familiale installée cet été, avec filtration écologique et margelles en pierre naturelle.",
    image: "/images/piscine1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop",
    link: "/actus/bordeaux",
    date: "2024-08-15",
    category: "réalisations",
    featured: true,
    readTime: "3 min"
  },
  {
    id: 2,
    title: "Conseils pour préparer votre piscine avant l'hiver",
    excerpt: "Découvrez nos astuces pour protéger efficacement votre bassin et votre équipement pendant la saison froide.",
    image: "/images/piscine2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
    link: "/actus/preparer-hiver",
    date: "2024-08-10",
    category: "conseils",
    featured: false,
    readTime: "5 min"
  },
  {
    id: 3,
    title: "Promo spéciale printemps 🌱",
    excerpt: "Demandez votre devis gratuit et bénéficiez de 10% de réduction sur nos installations jusqu'au 30 avril.",
    image: "/images/piscine3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&h=250&fit=crop",
    link: "/actus/promo-printemps",
    date: "2024-08-05",
    category: "promotions",
    featured: false,
    readTime: "2 min"
  },
  {
    id: 4,
    title: "Installation d'un spa 8 places à Bourg de Peage",
    excerpt: "Découvrez cette magnifique installation de spa avec système de chromothérapie et jets massants haute performance.",
    image: "/images/spa1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop",
    link: "/actus/spa-arcachon",
    date: "2024-07-28",
    category: "réalisations",
    featured: true,
    readTime: "4 min"
  },
  {
    id: 5,
    title: "Entretien automatique : les dernières innovations",
    excerpt: "Les nouveaux systèmes de traitement automatique révolutionnent l'entretien des piscines. Découvrez les technologies 2024.",
    image: "/images/tech1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop",
    link: "/actus/innovations-entretien",
    date: "2024-07-20",
    category: "conseils",
    featured: false,
    readTime: "6 min"
  },
  {
    id: 6,
    title: "Offre spéciale liner premium",
    excerpt: "Profitez de 15% de réduction sur nos liners haute qualité avec garantie 10 ans. Offre limitée jusqu'au 15 septembre.",
    image: "/images/liner1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=400&h=250&fit=crop",
    link: "/actus/promo-liner",
    date: "2024-07-15",
    category: "promotions",
    featured: false,
    readTime: "2 min"
  }
];

const categories = [
  { id: "tous", label: "Tous les articles", count: articles.length },
  { id: "réalisations", label: "Nos réalisations", count: articles.filter(a => a.category === "réalisations").length },
  { id: "conseils", label: "Conseils", count: articles.filter(a => a.category === "conseils").length },
  { id: "promotions", label: "Promotions", count: articles.filter(a => a.category === "promotions").length }
];

const FadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Actus() {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [imageErrors, setImageErrors] = useState({});

  const filteredArticles = activeCategory === "tous" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const handleImageError = (articleId) => {
    setImageErrors(prev => ({ ...prev, [articleId]: true }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'réalisations': return 'bg-blue-100 text-blue-800';
      case 'conseils': return 'bg-green-100 text-green-800';
      case 'promotions': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* En-tête */}
        <motion.div
          variants={FadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Actualités & Conseils
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières réalisations, nos conseils d'experts et nos offres spéciales 
            pour vos projets piscine et spa
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          variants={FadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-teal-600 text-white hover:text-red-600 shadow-lg scale-105"
                  : "bg-white text-white hover:bg-teal-50 hover:text-green-500 shadow-md"
              }`}
            >
              <Filter className="w-4 h-4" />
              {category.label}
              <span className="bg-black/10 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Articles mis en avant */}
        {featuredArticles.length > 0 && (
          <motion.section
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              À la une
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={FadeInScale}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imageErrors[article.id] ? article.fallbackImage : article.image}
                      alt={article.title}
                      onError={() => handleImageError(article.id)}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        ⭐ À la une
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </span>
                      <span>📖 {article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      to={article.link}
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 group-hover:gap-3 transition-all duration-300"
                    >
                      Lire l'article complet
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Autres articles */}
        {regularArticles.length > 0 && (
          <motion.section
            variants={FadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Tous nos articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={FadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imageErrors[article.id] ? article.fallbackImage : article.image}
                      alt={article.title}
                      onError={() => handleImageError(article.id)}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </span>
                      <span>📖 {article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      to={article.link}
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 group-hover:gap-3 transition-all duration-300"
                    >
                      Lire plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Message si aucun article */}
        {filteredArticles.length === 0 && (
          <motion.div
            variants={FadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Il n'y a pas encore d'articles dans cette catégorie.
              </p>
              <button
                onClick={() => setActiveCategory("tous")}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Voir tous les articles
              </button>
            </div>
          </motion.div>
        )}

        {/* Call-to-action */}
        <motion.div
          variants={FadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour vous conseiller et réaliser 
            votre projet piscine ou spa sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <Link
              to="/Projets"
              className="border-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Voir nos réalisations
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}