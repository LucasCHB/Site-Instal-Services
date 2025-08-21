import presentation from "../assets/presentation.png";

export default function Homepage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <img
        src={presentation} 
        alt="Logo Instal Services" 
        className="h-full w-auto mt-2.5 ml-0" 
      />
    </div>
  );
}
