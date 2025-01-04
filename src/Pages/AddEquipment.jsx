import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const CategoryName = form.categoryName.value;
    const description = form.description.value;
    const price = parseInt(form.price.value);
  
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const processingTime = form.processingTime.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

     const newEquipment = {
      image,
      itemName,
      CategoryName,
      description,
      price,
      rating,
      customization,
      stockStatus,
      userEmail,
      userName,
      processingTime
     };
    
  
     fetch('https://athleon-server.vercel.app/equipments',{
       method: 'POST',
       headers:{
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(newEquipment)
     })
     .then(res => res.json())
     .then(data => {
      if(data.insertedId){
        toast.success('Equipment Added Successfully!!')
        form.reset();
      }
     })
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 dark:bg-black">
    <div className="max-w-4xl w-full border-[#23cc8b] border-solid border  rounded-2xl shadow-lg p-8 relative">

      <div className="absolute top-0 left-0 w-32 h-32 bg-[#23cc8b] opacity-20 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#23cc8b] opacity-10 rounded-full -z-10 blur-3xl"></div>
  
      <h1 className="text-3xl font-extrabold text-center mb-8 text-[#23cc8b]">
        Add Equipment
      </h1>
      <form onSubmit={handleAddEquipment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="form-group">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
              Image URL
            </label>
            <input
              id="image"
              type="url"
              name="image"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
              placeholder="Enter image URL"
              required
            />
          </div>
  
 
          <div className="form-group">
            <label htmlFor="itemName" className="block text-sm font-semibold text-gray-600">
              Item Name
            </label>
            <input
              id="itemName"
              type="text"
              name="itemName"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
              placeholder="Enter item name"
              required
            />
          </div>
  
    
          <div className="form-group">
            <label htmlFor="categoryName" className="block text-sm font-semibold text-gray-600">
              Category Name
            </label>
            <input
              id="categoryName"
              type="text"
              name="categoryName"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
              placeholder="Enter category name"
              required
            />
          </div>
  
       
          <div className="form-group">
            <label htmlFor="price" className="block text-sm font-semibold text-gray-600">
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
              placeholder="Enter price"
              required
            />
          </div>
  
     
          <div className="form-group md:col-span-2">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2 h-24"
              placeholder="Enter description"
              required
            />
          </div>
  
     
          <div className="form-group">
            <label htmlFor="rating" className="block text-sm font-semibold text-gray-600">
              Rating
            </label>
            <input
              id="rating"
              type="number"
              name="rating"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
              placeholder="Enter rating (0-5)"
              max="5"
              step="0.1"
              required
            />
          </div>
  

          <div className="form-group">
            <label htmlFor="customization" className="block text-sm font-semibold text-gray-600">
              Customization
            </label>
            <select
              id="customization"
              name="customization"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
            >
              <option value="" disabled selected>
                Select an option
              </option>
       
              <option className="text-black" value="bat-with-extra-grip">Bat with Extra Grip</option>
              <option className="text-black" value="customized-ball">Customized Ball</option>
              <option className="text-black" value="engraved-bat">Engraved Bat</option>
              <option className="text-black" value="personalized-jersey">Personalized Jersey</option>
            </select>
          </div>
  
          <div className="form-group">
            <label htmlFor="processingTime" className="block text-sm font-semibold text-gray-600">
              Processing Time
            </label>
            <input
              id="processingTime"
              type="text"
              name="processingTime"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
              placeholder="Enter processing time"
              required
            />
          </div>
  
     
          <div className="form-group">
            <label htmlFor="stockStatus" className="block text-sm font-semibold text-gray-600">
              Stock Status
            </label>
            <input
              id="stockStatus"
              name="stockStatus"
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[#23cc8b] focus:border-[#23cc8b] transition p-2"
              required
            />
              
           
          </div>
  
       
          <div className="form-group">
            <label htmlFor="userEmail" className="block text-sm font-semibold text-gray-600">
              User Email
            </label>
            <input
              id="userEmail"
              type="email"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md bg-gray-100 cursor-not-allowed"
            />
          </div>
  
          {/* User Name */}
          <div className="form-group">
            <label htmlFor="userName"  className="block text-sm font-semibold text-gray-600">
              User Name
            </label>
            <input
              id="userName"
              type="text"
              name="userName"
              value={user?.displayName || ""}
              readOnly
              className="w-full mt-2 border outline-none border-gray-300 rounded-lg shadow-md bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>
  
        <button
          type="submit"
          className="w-full mt-6 bg-[#23cc8b] text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all"
        >
          Add Equipment
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddEquipment;
