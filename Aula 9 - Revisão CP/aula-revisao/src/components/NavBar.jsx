import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GitHub Explorer</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
        <Link to ="About" className="text-gray-400 hover:underline">Sobre</Link>
        <Link to ="Contact" className="text-gray-400 hover:underline">Contato</Link>
      </nav>
    </header>
  );
}
