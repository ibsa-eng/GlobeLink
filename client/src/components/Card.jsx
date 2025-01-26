import React from "react";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaBed, FaBath, FaCar, FaRegHeart } from "react-icons/fa";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { MdOutlineSquareFoot } from "react-icons/md";

const Card = ({
  image,
  title,
  price,
  location,
  category,
  onRentClick,
  onTitleClick,
  propertyId,
}) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    if (category === "BUY") {
      navigate(`/buy`);
    } else {
      navigate(`/rent/${propertyId}`);
    }
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      {/* Image container with relative positioning */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />

        {/* Featured badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          FEATURED
        </div>

        {/* Rent or Buy badge */}
        <div
          className={`absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded cursor-pointer ${
            category === "BUY" ? "right-2" : "right-16"
          }`}
          onClick={handleCategoryClick}
        >
          {category === "BUY" ? "BUY" : "RENT"}
        </div>

        {/* Bottom-right icons */}
        <div className="absolute bottom-2 right-2 flex space-x-2 z-10">
          {/* Favorite Icon */}
          <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
            <FaRegHeart size={16} className="text-gray-700" />
            <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
              Favorite
            </span>
          </button>

          {/* Preview Icon */}
          <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
            <AiOutlineExpandAlt size={16} className="text-gray-700" />
            <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
              Preview
            </span>
          </button>

          {/* Add to Compare Icon */}
          <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
            <IoAddCircleOutline size={16} className="text-gray-700" />
            <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
              Add to Compare
            </span>
          </button>
        </div>
      </div>

      {/* Title, price, and location */}
      <div className="p-4">
        <h2
          className="text-lg font-semibold truncate cursor-pointer"
          onClick={onTitleClick}
          title={title} // Displays the full title on hover
        >
          {title.length > 14 ? `${title.substring(0, 14)}...` : title}
        </h2>
        <p className="text-gray-600 text-sm">{price}</p>
        <p className="text-gray-500 text-xs">{location}</p>

        {/* Property details */}
        <div className="flex justify-between items-center text-gray-600 text-sm mt-4">
          <div className="flex items-center space-x-1">
            <FaBed size={14} />
            <span>4 Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaBath size={14} />
            <span>2 Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaCar size={14} />
            <span>1 Garage</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdOutlineSquareFoot size={14} />
            <span>1200 m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
