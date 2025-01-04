import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const MyEquipment = () => {
    const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);



  useEffect(() => {
    fetch(`https://athleon-server.vercel.app/equipmentsByUser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://athleon-server.vercel.app/equipments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
        
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingEquipments = equipments.filter(equipment => equipment._id !== id)
              setEquipments(remainingEquipments)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipments.map((equipment) => (
          <div
            key={equipment._id}
            className="relative bg-gradient-to-b from-[#ffffff] to-[#e0f7ec] border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
          >
   
            <div className="relative">
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="absolute top-3 right-3 px-3 py-1 text-xs bg-[#23cc8b] text-white font-bold rounded-full shadow">
                {equipment.stockStatus.toUpperCase()}
              </div>
            </div>

       
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {equipment.itemName}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Category:</strong> {equipment.CategoryName}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Description:</strong> {equipment.description}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Rating:</strong> {equipment.rating}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Customization:</strong> {equipment.customization}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Processing Time:</strong> {equipment.processingTime} days
              </p>
              
              <p className="text-lg font-bold text-[#23cc8b] mb-3">
                ${equipment.price}
              </p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigate(`/update/${equipment._id}`)}
                  className="px-4 py-2 text-sm bg-[#23cc8b] text-white rounded-full shadow-md hover:bg-[#1fa97d] transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(equipment._id)}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full shadow-md hover:from-red-500 hover:to-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#23cc8b] opacity-10 rounded-full"></div>
            <div className="absolute -top-3 -left-3 w-32 h-32 bg-[#23cc8b] opacity-10 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
