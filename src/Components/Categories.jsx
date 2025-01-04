import React from "react";
import { Fade } from "react-awesome-reveal";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Football",
      image: "https://i.ibb.co.com/fD41KLP/images.jpg",
      description: "Explore football gear, balls, and apparel.",
    },
    {
      id: 2,
      name: "Basketball",
      image: "https://i.ibb.co.com/WVmG03P/basketball-background-illustration-ai-generative-free-photo.jpg",
      description: "Find basketballs, shoes, and accessories.",
    },
    {
      id: 3,
      name: "Tennis",
      image: "https://i.ibb.co.com/yQZ7Tww/istockphoto-1483011696-612x612.jpg",
      description: "Shop for rackets, balls, and tennis apparel.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-12 p-6">
      <h2 className="text-3xl font-bold text-center text-[#23cc8b] mb-8">
        <Fade cascade damping={0.1}>Top Sports Categories</Fade>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-6  shadow-md rounded-lg hover:shadow-lg transition-shadow dark:bg-black dark:text-white"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {category.description}
            </p>
            <button className="mt-4 px-4 py-2 bg-[#23cc8b] text-white font-semibold rounded-md shadow-md hover:bg-[#1fa375] transition-all">
              Explore {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
