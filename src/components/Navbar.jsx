import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-8 py-6 border-b border-white/10">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-[4px]">
          LONDIWE
        </h1>

        <div className="flex gap-10 text-lg">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;