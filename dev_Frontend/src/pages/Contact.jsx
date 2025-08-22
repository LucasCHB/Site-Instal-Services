export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-6" id="contact">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          Demandez votre devis gratuit
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
        </p>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                placeholder="Jean Dupont"
                className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                placeholder="06 12 34 56 78"
                className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>0675792393
            <textarea
              rows="5"
              placeholder="Décrivez votre projet de piscine..."
              className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
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
