import { useState } from "react";

const FeaturedPlayerInsights = () => {

  const categories = [
    {
      id: 1,
      title: "Sport Starter Kits",
      description: "Everything you need to start your journey.",
      icon: "🏀",
    },
    {
      id: 2,
      title: "Pro-Level Upgrades",
      description: "Take your game to the next level!",
      icon: "💪",
    },
    {
      id: 3,
      title: "Eco-Sport Essentials",
      description: "Play hard while caring for the planet.",
      icon: "🌍",
    },
  ];


  const [prize, setPrize] = useState(null);

 
  const handleSpin = () => {
    const prizes = ["10% Off", "Free Item", "20% Off", "Thank You"];
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    setPrize(randomPrize);
  };

  return (
    <section className="bg-gradient-to-r from-[#23cc8b] to-[#f3e5ab] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          🏋️ Featured Play Zone:{" "}
          <span className="text-orange-400">Gear Up Like a Pro!</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform p-6"
            >
              <div className="text-6xl text-[#23cc8b]">{category.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <button className="mt-4 px-4 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-500 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>

      
        <div className="mt-16 text-center">
          <button
            onClick={handleSpin}
            className="relative inline-block"
            aria-label="Spin the wheel to win a prize"
          >
            <div className="w-48 h-48 rounded-full bg-orange-400 animate-spin-slow border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center text-3xl text-white">
                🎁 Spin & Win!
              </div>
            </div>
          </button>
          <p className="mt-4 text-white text-lg">
            {prize ? `You won: ${prize}!` : "Try your luck and win exclusive rewards!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayerInsights;