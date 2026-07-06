import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Artwork",
    description: "Create posters, canvas and framed artwork.",
    route: "/artwork",
    emoji: "🎨",
  },
  {
    id: 2,
    name: "Clothing",
    description: "Customize t-shirts, hoodies and more.",
    route: "/clothing",
    emoji: "👕",
  },
  {
    id: 3,
    name: "Accessories",
    description: "Personalize mugs, phone cases and tote bags.",
    route: "/accessories",
    emoji: "🎒",
  },
];

function Customize() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          Customize
        </h1>

        <p className="text-slate-400 mb-12">
          Choose a category to start designing.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((item) => (

            <div
              key={item.id}
              onClick={() => navigate(item.route)}
              className="cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-6xl mb-6">
                {item.emoji}
              </div>

              <h2 className="text-3xl font-bold mb-3">
                {item.name}
              </h2>

              <p className="text-slate-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Customize;