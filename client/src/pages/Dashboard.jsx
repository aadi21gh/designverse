import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="max-w-7xl mx-auto px-8 pt-32">

        <h1 className="text-6xl font-bold">
          Welcome,
          <span className="text-blue-500">
            {" "}
            {user?.name}
          </span>
          👋
        </h1>

        <p className="mt-5 text-slate-400 text-xl">
          Create your own products or explore creations from the community.
        </p>

      </div>

      {/* Cards */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-8 mt-20">

        {/* Customize */}

        <div
          onClick={() => navigate("/customize")}
          className="cursor-pointer rounded-3xl bg-slate-900 border border-slate-800 p-10 hover:border-blue-500 hover:-translate-y-3 transition duration-300"
        >

          <div className="text-7xl">
            🎨
          </div>

          <h2 className="text-4xl font-bold mt-8">
            Customize
          </h2>

          <p className="mt-5 text-slate-400 leading-8">

            Create completely personalized artwork,
            clothing and accessories using our
            customization studio.

          </p>

          <button
            className="mt-10 bg-blue-600 px-7 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Start Designing →
          </button>

        </div>

        {/* Explore */}

        <div
          onClick={() => navigate("/explore")}
          className="cursor-pointer rounded-3xl bg-slate-900 border border-slate-800 p-10 hover:border-yellow-400 hover:-translate-y-3 transition duration-300"
        >

          <div className="text-7xl">
            🌍
          </div>

          <h2 className="text-4xl font-bold mt-8">
            Explore
          </h2>

          <p className="mt-5 text-slate-400 leading-8">

            Browse creations from other users,
            purchase their designs and support creators.

          </p>

          <button
            className="mt-10 bg-yellow-500 text-black px-7 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Explore Designs →
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;