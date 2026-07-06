import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-20 top-10 left-10"></div>

      <div className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-[140px] opacity-20 bottom-10 right-10"></div>

      {/* Content */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-6">
          CREATE • SHARE • EARN
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

          Build Your Own

          <span className="block text-blue-500">
            Artwork,
          </span>

          <span className="block">
            Clothing &
          </span>

          <span className="block text-yellow-400">
            Accessories
          </span>

        </h1>

        <p className="mt-8 text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-8">

          Design unique products exactly the way you imagine.

          Share them with the community.

          Inspire others.

          Earn rewards when your creations become popular.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <Button
            text="Get Started"
            onClick={() => navigate("/signup")}
          />

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-xl border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition"
          >
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;