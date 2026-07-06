import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-500 tracking-wide"
        >
          DesignVerse
        </Link>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-5">

          <Button
            text="Get Started"
            onClick={() => navigate("/signup")}
          />

        </div>

        {/* Mobile */}

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <button
            onClick={() => navigate("/signup")}
            className="w-full py-4 text-white hover:bg-slate-800 transition"
          >
            Get Started
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;