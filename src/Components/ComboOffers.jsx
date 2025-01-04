import React from "react";

const ComboOffers = () => {
  const comboOffers = [
    {
      id: 1,
      name: "Running Essentials Combo",
      products: [
        { name: "Running Shoes", price: "$99.99" },
        { name: "Sports Socks (2-pack)", price: "$15.99" },
        { name: "Water Bottle", price: "$9.99" },
      ],
      originalPrice: 125.97,
      discountPrice: 99.99,
      image: "https://i.ibb.co.com/qd6nq5n/running-essentials.jpg",
    },
    {
      id: 2,
      name: "Tennis Pro Bundle",
      products: [
        { name: "Tennis Racquet", price: "$129.99" },
        { name: "Tennis Balls (3-pack)", price: "$10.99" },
        { name: "Grip Tape", price: "$7.99" },
      ],
      originalPrice: 148.97,
      discountPrice: 115.99,
      image: "https://i.ibb.co.com/MCGBZd8/Tennis-combo.jpg",
    },
    {
      id: 3,
      name: "Yoga Starter Pack",
      products: [
        { name: "Yoga Mat", price: "$29.99" },
        { name: "Yoga Blocks (2-pack)", price: "$14.99" },
        { name: "Yoga Strap", price: "$8.99" },
      ],
      originalPrice: 53.97,
      discountPrice: 39.99,
      image: "https://i.ibb.co.com/TrVfJH8/yogamat.jpg",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold  text-center mb-8">
          🔥 Exclusive Combo Offers: <span className="text-orange-500">Get More, Save More</span>
        </h2>

        {/* Combo Offers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboOffers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform p-6"
            >
              <img
                src={offer.image}
                alt={offer.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold">{offer.name}</h3>

              {/* Product List */}
              <ul className="list-disc pl-6 mt-4 ">
                {offer.products.map((product, idx) => (
                  <li key={idx} className="text-sm">
                    {product.name} - <span className="font-bold">{product.price}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing and Discount */}
              <div className="mt-4 flex items-center justify-between">
                <div className=" line-through">
                  ${offer.originalPrice.toFixed(2)}
                </div>
                <div className="text-xl font-semibold text-orange-500">
                  ${offer.discountPrice.toFixed(2)}
                </div>
              </div>

              {/* "Limited Time" Badge */}
              <div className="mt-4 text-center">
                <span className="bg-orange-400 text-white text-xs px-4 py-1 rounded-full">
                  Limited Time Offer
                </span>
              </div>

              {/* CTA */}
              <button className="mt-6 w-full px-4 py-2 bg-[#23cc8b] text-white rounded-lg shadow-md hover:bg-green-600 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComboOffers;