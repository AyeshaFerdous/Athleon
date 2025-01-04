import { useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
  const equipment = useLoaderData();
 
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 dark:bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center  mb-6">
          {equipment.itemName}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={equipment.image}
              alt={equipment.itemName}
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <p >
              <span className="font-bold">Category:</span>{" "}
              {equipment.CategoryName}
            </p>
            <p >
              <span className="font-bold">Description:</span>{" "}
              {equipment.description}
            </p>
            <p >
              <span className="font-bold">Customization:</span>{" "}
              {equipment.customization}
            </p>
            <p className="text-[#23cc8b] text-xl font-semibold">
              Price: ${equipment.price}
            </p>
            
            <p
              className={`px-3 py-1 inline-block rounded-md ${
                equipment.stockStatus === "available"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {equipment.stockStatus}
            </p>
            <p className="text-yellow-500 text-lg font-semibold">
              Rating: {equipment.rating} ⭐
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
