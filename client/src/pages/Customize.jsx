import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Artwork",
    image: "/images/categories/artwork.jpg",
    route: "/customize/artwork",
  },
  {
    title: "Clothing",
    image: "/images/categories/clothing.jpg",
    route: "/customize/clothing",
  },
  {
    title: "Accessories",
    image: "/images/categories/accessories.jpg",
    route: "/customize/accessories",
  },
];

export default function Customize() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F1E8] px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Customize Your Product
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.route)}
            className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}