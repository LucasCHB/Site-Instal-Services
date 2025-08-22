import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNameChange = (e) => {
    //supprime tous ce qui n'est pas une lettre ou un espace
    const value = e.target.value.replace(/[^A-Za-z ]/g, "");
    setName(value);
  };

    // Filtre : chiffres + espaces
    //Uniquement 10 chiffres
  const handlePhoneChange = (e) => {
    let digits = e.target.value.replace(/[^0-9 ]/g, "");
    if (digits.length > 10) digits = digits.slice(0, 10);
    setPhone(digits);

    //Vérification Live du format
    if (digut.length!== 10){
      setPhoneError("Le numéro de téléphone doit contenir exactement 10 chiffres.");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    //regex pour l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)){
      setEmailError("Adresse email invalide");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || phoneError) {
      alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
      return;
    }
    alert("Votre demande a bien été envoyée!");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-6" id="contact">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6 select-none">
          Demandez votre devis gratuit
        </h2>
        <p className="text-center text-gray-600 mb-10 select-none">
          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 select-none">Nom complet</label>
              <input
                type="text"
                placeholder="Jean Dupont"
                className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
                value={name}
                onChange={handleNameChange}                
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 select-none">Téléphone</label>
              <input
                type="tel"
                placeholder="06 12 34 56 78"
                className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 select-none">Email</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 select-none">Message</label>
            <textarea
              rows="5"
              placeholder="Décrivez votre projet de piscine..."
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-black"
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
  )
}
