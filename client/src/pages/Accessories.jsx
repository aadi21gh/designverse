import { useNavigate } from "react-router-dom";

const accessories = [
  {
    id: 7,
    name: "Phone Case",
    price: 499,
  },
  {
    id: 8,
    name: "Mug",
    price: 399,
  },
  {
    id: 9,
    name: "Tote Bag",
    price: 699,
  },
];

function Accessories() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Accessories
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {accessories.map((product) => (

          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >

            <div className="h-52 rounded-2xl bg-slate-800 mb-6 flex items-center justify-center">

              <span className="text-6xl">
                🎒
              </span>

            </div>

            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>

            <p className="text-blue-400 mt-2">
              Starting ₹{product.price}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Accessories;