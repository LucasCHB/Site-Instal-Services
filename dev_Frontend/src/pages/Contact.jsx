import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({}); // objet pour stocker les erreurs
  const [messageError, setMessageError] = useState(""); // erreur spécifique pour le message

  const handleNameChange = (e) => {
    let value = e.target.value.replace(/[^A-Za-z ]/g, "");
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

    if (value.length < 50) {
      setMessageError("Le message doit contenir au moins 50 caractères");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validation nom
    
    if (!name.trim()) newErrors.name = "Veuillez remplir ce champ";
    else {
      const spaceRegex = /^[A-Za-z]+ [A-Za-z]+$/;
      if (!spaceRegex.test(name.trim()))
        newErrors.name =
          "Le nom doit contenir exactement un espace entre prénom et nom";
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Votre demande a bien été envoyée!");
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-6" id="contact">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6 select-none">
          Demandez votre devis gratuit
        </h2>
        <p className="text-center text-gray-600 mb-10 select-none">
          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
        </p>

        <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
          {/* Nom */}
          <div>
            {errors.name && <p className="text-red-500 text-sm mb-1">{errors.name}</p>}
            <label className="block text-sm font-medium text-gray-700 select-none">Nom complet</label>
            <input
              type="text"
              placeholder="Saisissez votre Nom Prénom"
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          {/* Téléphone */}
          <div>
            {errors.phone && <p className="text-red-500 text-sm mb-1">{errors.phone}</p>}
            <label className="block text-sm font-medium text-gray-700 select-none">Téléphone</label>
            <input
              type="tel"
              placeholder="06 12 34 56 78"
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          {/* Email */}
          <div>
            {errors.email && <p className="text-red-500 text-sm mb-1">{errors.email}</p>}
            <label className="block text-sm font-medium text-gray-700 select-none">Email</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* Message */}
          <div>
            {(errors.message || messageError) && (
              <p className="text-red-500 text-sm mb-1">{errors.message || messageError}</p>
            )}
            <label className="block text-sm font-medium text-gray-700 select-none">Message</label>
            <textarea
              rows="5"
              placeholder="Décrivez votre projet de piscine..."
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition transform hover:scale-[1.02]"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}
