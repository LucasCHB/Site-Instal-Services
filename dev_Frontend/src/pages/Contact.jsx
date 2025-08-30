const toggleProjectType = (value) => {
    setProjectTypes(prev => {
      if (prev.includes(value)) {
        return prev.filter(type => type !== value);
      } else {
        return [...prev, value];
      }
    });
    setErrors(prev => ({ ...prev, projectType: "" }));
  };import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  User,
  MessageSquare,
  Calendar,
  Award,
  Shield,
  Wrench
} from "lucide-react";

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

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [projectTypes, setProjectTypes] = useState([]);
  const [urgency, setUrgency] = useState("");

  const [errors, setErrors] = useState({});
  const [messageError, setMessageError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  const projectTypeOptions = [
    { value: "traitement", label: "Traitement automatique", icon: Wrench },
    { value: "pompe", label: "Installation pompe", icon: CheckCircle },
    { value: "liner", label: "Pose de liner", icon: Shield },
    { value: "spa", label: "Installation spa", icon: Award },
    { value: "maintenance", label: "Maintenance", icon: Clock },
    { value: "autre", label: "Autre projet", icon: MessageSquare }
  ];

  const urgencyOptions = [
    { value: "urgent", label: "Urgent (dans la semaine)" },
    { value: "rapide", label: "Rapide (dans le mois)" },
    { value: "planifie", label: "Planifié (dans les 3 mois)" },
    { value: "reflexion", label: "En réflexion" }
  ];

  const handleNameChange = (e) => {
    let value = e.target.value.replace(/[^A-Za-zÀ-ÿ ]/g, "");
    value = value.replace(/  +/g, " ");
    setName(value);

    const spaceCount = (value.match(/ /g) || []).length;
    setErrors((prev) => ({
      ...prev,
      name:
        spaceCount === 1 || value === ""
          ? ""
          : "Le nom doit contenir exactement un espace entre prénom et nom",
    }));
  };

  const handlePhoneChange = (e) => {
    let digits = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    let formatted = digits.replace(/(\d{2})(?=\d)/g, "$1 ");
    setPhone(formatted);
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);

    // Ne pas afficher l'erreur tant qu'on n'a pas tenté de soumettre
    if (hasAttemptedSubmit) {
      if (value.length < 50) {
        setMessageError("Le message doit contenir au moins 50 caractères");
      } else {
        setMessageError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasAttemptedSubmit(true); // Marquer qu'on a tenté de soumettre
    let newErrors = {};

    // Validation nom
    if (!name.trim()) newErrors.name = "Veuillez remplir ce champ";
    else {
      const spaceRegex = /^[A-Za-zÀ-ÿ]+ [A-Za-zÀ-ÿ]+$/;
      if (!spaceRegex.test(name.trim()))
        newErrors.name = "Le nom doit contenir exactement un espace entre prénom et nom";
    }

    // Validation téléphone
    if (phone.replace(/\s/g, "").length !== 10)
      newErrors.phone = "Veuillez entrer 10 chiffres";

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email))
      newErrors.email = "Veuillez entrer un email valide";

    // Validation message
    if (!message || message.length < 50)
      newErrors.message = "Le message doit contenir au moins 50 caractères";

    // Validation type de projet
    if (projectTypes.length === 0)
      newErrors.projectType = "Veuillez sélectionner au moins un type de projet";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulation d'envoi
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset du formulaire après succès
        setTimeout(() => {
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setProjectTypes([]);
          setUrgency("");
          setIsSubmitted(false);
          setHasAttemptedSubmit(false); // Reset aussi le flag de tentative
        }, 3000);
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Demande envoyée avec succès !
          </h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre demande. Nous vous recontacterons dans les 24h pour discuter de votre projet.
          </p>
          <div className="bg-teal-50 rounded-xl p-4">
            <p className="text-teal-700 font-semibold">
              📞 En urgence ? Appelez-nous au 01 23 45 67 89
            </p>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <motion.div
          variants={FadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à concrétiser votre projet ? Nos experts vous accompagnent 
            de la conception à la réalisation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Formulaire */}
          <motion.div
            variants={FadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Send className="w-6 h-6 text-teal-600" />
                Demande de devis
              </h2>
              <p className="text-gray-600">
                Décrivez-nous votre projet, nous vous répondons sous 24h
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Nom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nom complet *
                </label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className={`w-full rounded-xl text-black border-2 p-4 focus:outline-none transition-colors ${
                    errors.name 
                      ? "border-red-300 focus:border-red-500" 
                      : "border-gray-200 focus:border-teal-500"
                  }`}
                  value={name}
                  onChange={handleNameChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone *
                </label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className={`w-full rounded-xl text-black border-2 p-4 focus:outline-none transition-colors ${
                    errors.phone 
                      ? "border-red-300 focus:border-red-500" 
                      : "border-gray-200 focus:border-teal-500"
                  }`}
                  value={phone}
                  onChange={handlePhoneChange}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="jean.dupont@email.com"
                  className={`w-full text-black rounded-xl border-2 p-4 focus:outline-none transition-colors ${
                    errors.email 
                      ? "border-red-300 focus:border-red-500" 
                      : "border-gray-200 focus:border-teal-500"
                  }`}
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Types de projet (sélection multiple) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Types de projet * (sélection multiple possible)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {projectTypeOptions.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => toggleProjectType(type.value)}
                      className={`p-3 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-2 relative ${
                        projectTypes.includes(type.value)
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-gray-200 hover:border-teal-300 hover:bg-teal-25"
                      }`}
                    >
                      <type.icon className="w-4 h-4" />
                      <span className="text-sm font-medium flex-1">{type.label}</span>
                      {projectTypes.includes(type.value) && (
                        <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {projectTypes.length > 0 && (
                  <div className="mt-3 p-3 bg-teal-50 rounded-xl">
                    <p className="text-sm text-teal-700 font-medium">
                      {projectTypes.length} projet{projectTypes.length > 1 ? 's' : ''} sélectionné{projectTypes.length > 1 ? 's' : ''} : {' '}
                      {projectTypes.map(type => 
                        projectTypeOptions.find(opt => opt.value === type)?.label
                      ).join(', ')}
                    </p>
                  </div>
                )}
                {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
              </div>

              {/* Urgence */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Délai souhaité
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 p-4 focus:outline-none focus:border-teal-500 transition-colors text-black"
                >
                  <option value="">Sélectionnez un délai</option>
                  {urgencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Décrivez votre projet *
                </label>
                <textarea
                  rows="5"
                  placeholder="Décrivez votre projet : type de piscine, dimensions, équipements souhaités, contraintes particulières..."
                  className={`w-full rounded-xl border-2 p-4 focus:outline-none transition-colors resize-none text-black ${
                    errors.message || messageError
                      ? "border-red-300 focus:border-red-500" 
                      : "border-gray-200 focus:border-teal-500"
                  }`}
                  value={message}
                  onChange={handleMessageChange}
                />
                <div className="flex justify-between items-center mt-1">
                  {(errors.message || messageError) && (
                    <p className="text-red-500 text-sm">{errors.message || messageError}</p>
                  )}
                  <p className={`text-sm ml-auto ${
                    message.length >= 50 ? "text-green-600" : "text-gray-400"
                  }`}>
                    {message.length}/50 caractères min
                  </p>
                </div>
              </div>

              {/* Bouton submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-teal-600 hover:bg-teal-700 hover:shadow-xl"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer ma demande de devis
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                * Champs obligatoires • Réponse garantie sous 24h
              </p>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            variants={FadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            
            {/* Coordonnées */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <a 
                      href="tel:+33123456789" 
                      className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
                    >
                      01 23 45 67 89
                    </a>
                    <p className="text-sm text-gray-500">Lun-Ven : 8h-18h | Sam : 9h-12h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:contact@instal-services.fr" 
                      className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
                    >
                      contact@instal-services.fr
                    </a>
                    <p className="text-sm text-gray-500">Réponse sous 24h garantie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Zone d'intervention</h4>
                    <p className="text-gray-700">Gironde et départements limitrophes</p>
                    <p className="text-sm text-gray-500">Déplacements gratuits pour devis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-teal-600" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-teal-600 font-medium">Lundi - Vendredi</span>
                  <span className="text-teal-600 font-semibold">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-600 font-medium">Samedi</span>
                  <span className="text-teal-600 font-semibold">9h00 - 12h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Dimanche</span>
                  <span className="text-gray-500">Fermé</span>
                </div>
                <div className="border-t pt-3 mt-4">
                  <p className="text-sm text-gray-600">
                    🚨 <strong>Interventions d'urgence :</strong> 24h/24 sur appel
                  </p>
                </div>
              </div>
            </div>

            {/* Garanties */}
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Nos engagements
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Devis gratuit et sans engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Réponse garantie sous 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Matériaux de qualité premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Garantie sur tous nos travaux</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Suivi personnalisé de A à Z</span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Section informations supplémentaires */}
        <motion.div
          variants={FadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Intervention rapide</h3>
            <p className="text-gray-600">
              Devis sur site sous 48h et intervention dans les meilleurs délais
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">15 ans d'expérience</h3>
            <p className="text-gray-600">
              Une expertise reconnue dans l'installation et la maintenance aquatique
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Garantie totale</h3>
            <p className="text-gray-600">
              Tous nos travaux sont garantis et assurés pour votre tranquillité
            </p>
          </div>
        </motion.div>

        {/* FAQ rapide */}
        <motion.div
          variants={FadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">💰 Combien coûte une installation ?</h4>
              <p className="text-gray-600 text-sm">
                Le prix dépend de nombreux facteurs. Nous établissons un devis personnalisé gratuit après visite.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">⏱️ Quels sont vos délais ?</h4>
              <p className="text-gray-600 text-sm">
                Généralement 2-4 semaines selon la complexité. Interventions d'urgence possibles sous 48h.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🛡️ Avez-vous des garanties ?</h4>
              <p className="text-gray-600 text-sm">
                Oui, nous garantissons nos installations et sommes couverts par une assurance décennale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📍 Dans quelles zones intervenez-vous ?</h4>
              <p className="text-gray-600 text-sm">
                Principalement en Gironde, et départements limitrophes selon la taille du projet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}