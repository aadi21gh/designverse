const steps = [
  "Choose Product",
  "Customize",
  "Get AI Price",
  "Buy",
  "Share",
  "Earn Rewards"
];

function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-20">
          How It Works
        </h2>

        <div className="grid md:grid-cols-6 gap-6">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-6 text-center hover:border-yellow-400 transition"
            >

              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5 text-xl font-bold">

                {index + 1}

              </div>

              <h3 className="font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;