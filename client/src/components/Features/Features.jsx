import { Palette, Shirt, Gem } from "lucide-react";

const features = [
  {
    icon: <Palette size={40} />,
    title: "Artwork",
    description:
      "Design unique wall art, posters and digital artwork exactly how you imagine."
  },
  {
    icon: <Shirt size={40} />,
    title: "Clothing",
    description:
      "Customize t-shirts, hoodies, jackets and many more fashion products."
  },
  {
    icon: <Gem size={40} />,
    title: "Accessories",
    description:
      "Personalize mugs, phone cases, bags, watches and accessories."
  }
];

function Features() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          What Can You Customize?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-3 transition duration-300"
            >

              <div className="text-blue-500 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;