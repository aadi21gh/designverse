import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          DesignVerse
        </Link>

        {token ? (

          <div className="flex gap-5 items-center">

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/customize">Customize</Link>

            <Link to="/explore">Explore</Link>

            <Button
              text="Logout"
              onClick={logout}
            />

          </div>

        ) : (

          <Button
            text="Get Started"
            onClick={() => navigate("/signup")}
          />

        )}

      </div>

    </nav>
  );
}

export default Navbar;