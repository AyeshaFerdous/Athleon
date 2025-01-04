const Product = ({ product }) => {
  const {
    _id,
    image,
    itemName,
    categoryName,
    price,
    rating,
    customization,
    stockStatus,
  } = product;
  return (
    <div className="w-full mx-auto border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow  hover:scale-105 hover:transition-transform duration-300">
    
      <div className="relative">
        <img
          src={image}
          alt={itemName}
          className="w-full h-48 object-cover rounded-lg p-4"
        />
       
    
      </div>

  
      <div className="p-5">
        <h2 className="text-lg font-semibold   dark:text-white truncate">
          {itemName}
        </h2>
        <p className="text-sm dark:text-white">{categoryName}</p>
        <p className="text-sm  dark:text-white mt-2">
          <span className="font-medium">Customization:</span>{" "}
          {customization || "N/A"}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold dark:text-white">${price}</p>
          <div className="flex items-center">
            <span className="text-sm font-medium text-yellow-500 mr-1">
              {rating || 0}
            </span>
            <svg
              className="w-5 h-5 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .587l3.668 7.573 8.332 1.151-6.064 5.952 1.433 8.273L12 18.897 4.631 23.536l1.433-8.273-6.064-5.952 8.332-1.151L12 .587z" />
            </svg>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <button
            className={'w-full py-2 rounded-lg font-medium transition-colors bg-green-500 text-white hover:bg-green-600'}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};




export default Product;