import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold mb-4">
        Welcome {user?.name} 👋
      </h1>

      <p className="text-slate-400 mb-12">
        What would you like to do?
      </p>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">

        <div
          onClick={() => navigate("/customize")}
          className="cursor-pointer bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-blue-500 transition"
        >
          <h2 className="text-3xl font-bold mb-3">
            Customize
          </h2>

          <p className="text-slate-400">
            Create your own products.
          </p>
        </div>

        <div
          onClick={() => navigate("/explore")}
          className="cursor-pointer bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-yellow-400 transition"
        >
          <h2 className="text-3xl font-bold mb-3">
            Explore
          </h2>

          <p className="text-slate-400">
            Discover community creations.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;