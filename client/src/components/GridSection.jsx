import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaCar, FaDivide, FaRegHeart } from "react-icons/fa";
import {
  AiOutlineExpandAlt,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineSquareFoot } from "react-icons/md";

// Card Component
const Card = ({ image, title, price, category, location, type }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };
  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="border rounded-lg shadow-lg  bg-white relative transition-transform duration-300">
      {/* Left Arrow */}

      <button
        onClick={handlePreviousImage}
        // onClick={() => alert("Left arrow clicked!")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-600 hover:text-black transition duration-200"
      >
        <AiOutlineLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        // onClick={() => alert("Right arrow clicked!")}
        onClick={handleNextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-black transition duration-200"
      >
        <AiOutlineRight size={20} />
      </button>

      {/* Image container */}
      <div className="relative">
        <img
          src={image[currentImageIndex]}
          alt={title}
          className="w-full h-56 object-cover"
        />

        {/* Left Arrow */}

        {/* Featured badge */}
        <button
          onClick={() => alert("Featured button clicked!")}
          className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 text-xs font-bold rounded shadow"
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
          className="absolute top-2 right-2 bg-black bg-opacity-80 text-white px-3 py-1 text-xs font-bold rounded shadow"
        >
          {type.toUpperCase()}
        </button>

        {/* Bottom-right icons */}
        <div className="absolute bottom-2 right-2 flex space-x-3 z-10">
          {/* Favorite Icon */}

          {/* Preview Icon */}
          <div className="relative group">
            <button
              onClick={() => setIsPreviewOpen(true)}
              //onClick={() => alert("Preview button clicked!")}
              className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
            >
              <AiOutlineExpandAlt
                style={{
                  fontFamily: "houzez-iconfont",
                  fontSize: "14px",
                  lineHeight: "14px",
                  letterSpacing: "normal",
                  color: "#FFFFFF",
                }}
                size={18}
                className="text-gray-800"
              />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">
              Preview
            </span>
          </div>

          <div className="relative group">
            <button
              onClick={() => alert("Favorite button clicked!")}
              className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
            >
              <FaRegHeart
                style={{
                  fontFamily: "houzez-iconfont",
                  fontSize: "14px",
                  lineHeight: "14px",
                  letterSpacing: "normal",
                  color: "#FFFFFF",
                }}
                size={18}
                className="text-gray-800"
              />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">
              Favorite
            </span>
          </div>
          {/* Add to Compare Icon */}
          <div className="relative group">
            <button
              onClick={() => alert("Add to Compare button clicked!")}
              className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
            >
              <IoAddCircleOutline
                style={{
                  fontFamily: "houzez-iconfont",
                  fontSize: "14px",
                  lineHeight: "14px",
                  letterSpacing: "normal",
                  color: "#FFFFFF",
                }}
                size={18}
                className="text-gray-800"
              />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">
              Add to Compare
            </span>
          </div>
        </div>
      </div>

      {/* Title, price, and location */}
      <div className="p-0">
        <h2
          className="text-lg text-gray-800 mb-8 mt-8 truncate text-center"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "24px",
            lineHeight: "34px",
            letterSpacing: "normal",
            color: "#222222",
          }}
        >
          <button
            className="text-center"
            onClick={() => navigate(`/details/${title}`)}
          >
            {truncateText(title, 15)}
          </button>
        </h2>

        <p
          className="text-blue-700 font-extrabold text-center mb-2 top-9"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500", // Montserrat Medium
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "normal",
            color: "#222222",
          }}
        >
          {price}
        </p>
        <p
          className="text-gray-500 text-center text-sm mb-8"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "normal",
            color: "#222222",
          }}
        >
          {category}
        </p>

        {/* Property details */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <MdOutlineBed
            style={{
              fontFamily: "houzez-iconfont",
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "normal",
              color: "#222222",
            }}
            size={26}
          />
          <span className="text-gray-800 font-medium">4</span>
          <FaShower
            style={{
              fontFamily: "houzez-iconfont",
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "normal",
              color: "#222222",
            }}
            size={26}
          />
          <span className="text-gray-800 font-medium">2</span>
          <FaCar
            style={{
              fontFamily: "houzez-iconfont",
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "normal",
              color: "#222222",
            }}
            size={26}
          />
          <span className="text-gray-800 font-medium">1</span>
          <MdOutlineSquareFoot
            style={{
              fontFamily: "houzez-iconfont",
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "normal",
              color: "#222222",
            }}
            size={26}
          />
          <span className="text-gray-800 font-medium">1200 m²</span>
        </div>
      </div>
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>

          {/* Preview Image */}
          <img
            src={image[currentImageIndex]} // Shows current image
            alt={title}
            className="max-w-full max-h-full rounded-lg"
          />

          <h2
            className="text-lg text-gray-800 mb-8 mt-8 truncate text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "24px",
              lineHeight: "34px",
              letterSpacing: "normal",
              color: "#222222",
            }}
          >
            <button
              className="text-center"
              onClick={() => navigate(`/details/${title}`)}
            >
              {truncateText(title, 15)}
            </button>
          </h2>

          <p
            className="text-blue-700 font-extrabold text-center mb-2 top-9"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500", // Montserrat Medium
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "normal",
              color: "#222222",
            }}
          >
            {price}
          </p>
          <p
            className="text-gray-500 text-center text-sm mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              lineHeight: "24px",
              letterSpacing: "normal",
              color: "#222222",
            }}
          >
            {category}
          </p>

          {/* Property details */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <MdOutlineBed
              style={{
                fontFamily: "houzez-iconfont",
                fontSize: "18px",
                lineHeight: "18px",
                letterSpacing: "normal",
                color: "#222222",
              }}
              size={26}
            />
            <span className="text-gray-800 font-medium">4</span>
            <FaShower
              style={{
                fontFamily: "houzez-iconfont",
                fontSize: "18px",
                lineHeight: "18px",
                letterSpacing: "normal",
                color: "#222222",
              }}
              size={26}
            />
            <span className="text-gray-800 font-medium">2</span>
            <FaCar
              style={{
                fontFamily: "houzez-iconfont",
                fontSize: "18px",
                lineHeight: "18px",
                letterSpacing: "normal",
                color: "#222222",
              }}
              size={26}
            />
            <span className="text-gray-800 font-medium">1</span>
            <MdOutlineSquareFoot
              style={{
                fontFamily: "houzez-iconfont",
                fontSize: "18px",
                lineHeight: "18px",
                letterSpacing: "normal",
                color: "#222222",
              }}
              size={26}
            />
            <span className="text-gray-800 font-medium">1200 m²</span>
          </div>
        </div>
      )}
    </div>
  );
};

// GridSection Component
const GridSection = ({ properties }) => {
  const [visibleProperties, setVisibleProperties] = useState(6); // Initial visible count

  // Load More Handler
  const handleLoadMore = () => {
    setVisibleProperties((prevCount) => prevCount + 3); // Load 6 more items
  };
  return (
    <div className="max-w-screen-xl bg-gray-100 -mx-auto  px-4">
      <h1
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "40px",
          lineHeight: "48px",
          letterSpacing: "normal",
          color: "#000000",
        }}
        className=" text-center  mt-20 mb-20 "
      >
        Featured Exclusives
      </h1>
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "1px",
          color: "#7A7A7A",
        }}
        className=" text-center  mt-10 mb-20"
      >
        {" "}
        Most Wanted Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {properties.slice(0, visibleProperties).map((property, index) => (
          <Card
            key={index}
            image={property.image}
            title={property.title}
            price={property.price}
            category={property.category}
            location={property.location}
            type={property.type}
          />
        ))}
      </div>
      {visibleProperties < properties.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-12 py-2 rounded-lg border-2 border-black text-black bg-white hover:bg-slate-700 hover:text-white p-4 mt-3 mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "40px",
              letterSpacing: "1px",
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default GridSection;
