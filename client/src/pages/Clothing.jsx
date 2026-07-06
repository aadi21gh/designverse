import { useNavigate } from "react-router-dom";

const clothingProducts = [
  {
    id: 4,
    name: "Regular T-Shirt",
    price: 599,
  },
  {
    id: 5,
    name: "Oversized T-Shirt",
    price: 699,
  },
  {
    id: 6,
    name: "Hoodie",
    price: 1299,
  },
];

function Clothing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Clothing
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {clothingProducts.map((product) => (

          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >

            <div className="h-52 rounded-2xl bg-slate-800 mb-6 flex items-center justify-center">

              <span className="text-6xl">
                👕
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

export default Clothing;