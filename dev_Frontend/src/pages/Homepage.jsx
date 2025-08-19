import logo from "../assets/Réalisations (2).jpg";

export default function Homepage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Page d'accueil OK 🚀
      </h1>
      <img 
        src={logo} 
        alt="Logo Instal Services" 
        className="h-[100px] w-auto mt-2.5 ml-0" 
      />
    </div>
  );
}
