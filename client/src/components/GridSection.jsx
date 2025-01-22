import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaBed, FaBath, FaCar, FaRegHeart } from "react-icons/fa";
import {
  AiOutlineExpandAlt,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { MdOutlineSquareFoot } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, price, location, type }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white relative">
      {/* Left Arrow */}
      <button
        onClick={() => alert("Left arrow clicked!")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-600 hover:text-black transition duration-200"
      >
        <AiOutlineLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => alert("Right arrow clicked!")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-black transition duration-200"
      >
        <AiOutlineRight size={20} />
      </button>

      {/* Image container */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />

        {/* Featured badge */}
        <button
          onClick={() => alert("Featured button clicked!")}
          className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded"
        >
          FEATURED
        </button>

        {/* Rent/Buy badge */}
        <button
          onClick={() => {
            if (type.toUpperCase() === "BUY") {
              navigate("/buy");
            } else {
              navigate("/rent");
            }
          }}
          className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded"
        >
          {type.toUpperCase()}
        </button>

        {/* Bottom-right icons */}
        <div className="absolute bottom-2 right-2 flex space-x-2 z-10">
          {/* Favorite Icon */}
          <div className="relative group">
            <button
              onClick={() => alert("Favorite button clicked!")}
              className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
            >
              <FaRegHeart size={16} className="text-gray-700" />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100">
              Favorite
            </span>
          </div>

          {/* Preview Icon */}
          <div className="relative group">
            <button
              onClick={() => alert("Preview button clicked!")}
              className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
            >
              <AiOutlineExpandAlt size={16} className="text-gray-700" />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100">
              Preview
            </span>
          </div>

          {/* Add to Compare Icon */}
          <div className="relative group">
            <button
              onClick={() => alert("Add to Compare button clicked!")}
              className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
            >
              <IoAddCircleOutline
                size={16}
                className="text-gray-700 border-white"
              />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100">
              Add to Compare
            </span>
          </div>
        </div>
      </div>

      {/* Title, price, and location */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          <button
            onClick={() => alert(`Title clicked: ${title}`)}
            className="hover:underline"
          >
            {title.length > 14 ? `${title.slice(0, 14)}...` : title}
          </button>
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

const GridSection = ({ properties }) => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-10 mb-6">
        Featured Exclusives
      </h1>
      <h2 className="text-4xl text-center font-semibold text-gray-600 mb-10">
        Most Wanted Properties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <Card
            key={index}
            image={property.image}
            title={property.title}
            price={property.price}
            location={property.location}
            type={property.type}
          />
        ))}
      </div>
    </div>
  );
};

export default GridSection;
