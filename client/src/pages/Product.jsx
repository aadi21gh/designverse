import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

function Product() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const data = await getProductById(id);

      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-red-500 text-3xl">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-8 pt-32 grid md:grid-cols-2 gap-14">

        <div className="bg-slate-900 rounded-3xl h-[600px] flex justify-center items-center">

          <span className="text-9xl">📦</span>

        </div>

        <div>

          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-blue-400 text-3xl mt-6">
            ₹{product.basePrice}
          </p>

          <p className="text-slate-400 mt-8 leading-8">
            Create your own personalized version of this product
            using our Design Studio. Add artwork, text, graphics
            and make it completely yours.
          </p>

          <div className="mt-10">

            <p className="text-slate-500">
              Category
            </p>

            <h3 className="text-2xl font-semibold mt-2">
              {product.category}
            </h3>

          </div>

          <button
            onClick={() => navigate(`/design/${product._id}`)}
            className="mt-14 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Customize Now →
          </button>

        </div>

      </div>

    </div>
  );
}

export default Product;