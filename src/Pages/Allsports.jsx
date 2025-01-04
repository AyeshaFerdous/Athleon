import React, {  useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Allsports = () => {
  const equipments = useLoaderData();

  const [sortedEquipments, setSortedEquipments] = useState(equipments);
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  
  const handleSort = () => {
    
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    fetch(`https://athleon-server.vercel.app/allsports?sortOrder=${newOrder}`)
    .then(res=>res.json())
    .then(data => {
      setSortedEquipments(data)})
  };

  const handleViewDetails = (id) => {
    navigate(`/equipments/${id}`);
  };

  return (
    <div>
     <div className="max-w-7xl mx-auto mt-10 p-2 md:p-6 dark:bg-black rounded-lg shadow-lg">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
    <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
      Equipment List
    </h2>
    <button
      onClick={handleSort}
      className="px-4 py-2 bg-[#23cc8b] text-white font-semibold rounded-md shadow-md hover:bg-[#1fa375] transition-all"
    >
      Sort by Price ({sortOrder === "asc" ? "Descending" : "Ascending"})
    </button>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full text-left dark:bg-black shadow-lg rounded-md">
      <thead className="bg-[#23cc8b] text-white">
        <tr>
          <th className="p-2 sm:p-4 rounded-tl-md">Image</th>
          <th className="p-2 sm:p-4">Name</th>
          <th className="p-2 sm:p-4">Category</th>
          <th className="p-2 sm:p-4">Price</th>
          <th className="p-2 sm:p-4 text-center rounded-tr-md">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {sortedEquipments.map((equipment) => (
          <tr
            key={equipment._id}
            className="hover:bg-[#f1fdf7] transition-colors"
          >
            <td className="p-2 sm:p-4">
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover"
              />
            </td>
            <td className="p-2 sm:p-4 font-semibold dark:text-white">
              {equipment.itemName}
            </td>
            <td className="p-2 sm:p-4 dark:text-white">
              {equipment.CategoryName}
            </td>
            <td className="p-2 sm:p-4 text-[#23cc8b] font-bold">
              ${equipment.price}
            </td>
            
            <td className="p-2 sm:p-4 text-center">
              <button
                onClick={() => handleViewDetails(equipment._id)}
                className="px-4 sm:px-5 py-2 bg-[#23cc8b] text-white font-semibold rounded-md shadow-md hover:bg-[#1fa375] transition-all"
              >
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
     </div>
    </div>
  );
};

export default Allsports;


