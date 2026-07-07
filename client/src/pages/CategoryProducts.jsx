import { useNavigate, useParams } from "react-router-dom";

const data = {
  artwork: [
    { id: 1, name: "Canvas Print", image: "/images/products/canvas.jpg" },
    { id: 2, name: "Poster", image: "/images/products/poster.jpg" },
  ],

  clothing: [
    { id: 3, name: "Oversized T-Shirt", image: "/images/products/tshirt.jpg" },
    { id: 4, name: "Hoodie", image: "/images/products/hoodie.jpg" },
  ],

  accessories: [
    { id: 5, name: "Phone Case", image: "/images/products/phonecase.jpg" },
    { id: 6, name: "Mug", image: "/images/products/mug.jpg" },
  ],
};

export default function CategoryProducts() {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = data[category] || [];

  return (
    <div className="min-h-screen bg-[#F5F1E8] p-10">
      <h1 className="text-4xl font-bold capitalize mb-8">
        {category}
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() =>
              navigate(`/design/${product.id}`, {
                state: {
                  category,
                  product,
                },
              })
            }
            className="bg-white rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-72 w-full object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}