// // import React from "react";

// // const Card = ({ image, title, price, location }) => {
// //   return (
// //     <div className="border rounded-md shadow-md overflow-hidden">
// //       <img src={image} alt={title} className="w-full h-48 object-cover" />
// //       <div className="p-4">
// //         <h3 className="text-lg font-bold">{title}</h3>
// //         <p className="text-gray-500">{location}</p>
// //         <p className="text-primary font-bold mt-2">${price}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Card;
// // Card.js
// import React from "react";
// import { FaHeart, FaEye, FaRegListAlt } from "react-icons/fa"; // Importing icons from react-icons

// const Card = ({ image, title, price, location }) => {
//   return (
//     <div className="relative border rounded-lg p-4 shadow-lg">
//       {/* Image with buttons and icons */}
//       <div className="relative">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-40 object-cover rounded-md"
//         />

//         {/* Featured button at top left */}
//         <button className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
//           Featured
//         </button>

//         {/* RENT button at top right */}
//         <button className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
//           RENT
//         </button>

//         {/* Bottom right icons */}
//         <div className="absolute bottom-2 right-2 flex space-x-2">
//           {/* Preview Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaEye size={18} />
//           </button>

//           {/* Favorite Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaHeart size={18} />
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaRegListAlt size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Title and other details */}
//       <h2 className="text-xl font-semibold mt-4">{title}</h2>
//       <p className="text-lg text-gray-600">{price}</p>
//       <p className="text-sm text-gray-500">{location}</p>
//     </div>
//   );
// };

// export default Card;
// // Card.js

// import React from "react";
// import { FaHeart, FaEye, FaRegListAlt } from "react-icons/fa"; // Importing icons from react-icons

// const Card = ({ image, title, price, location }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-lg">
//       {/* Image container */}
//       <div className="relative">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-60 object-cover rounded-md"
//         />

//         {/* Featured button at top left */}
//         <button className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
//           Featured
//         </button>

//         {/* RENT button at top right */}
//         <button className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
//           RENT
//         </button>

//         {/* Bottom right icons */}
//         <div className="absolute bottom-2 right-2 flex space-x-2 z-20">
//           {/* Preview Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaEye size={18} />
//           </button>

//           {/* Favorite Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaHeart size={18} />
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaRegListAlt size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Title and other details */}
//       <h2 className="text-xl font-semibold mt-4">{title}</h2>
//       <p className="text-lg text-gray-600">{price}</p>
//       <p className="text-sm text-gray-500">{location}</p>

//       {/* Additional property details */}
//       <div className="flex space-x-4 mt-3">
//         <div className="flex items-center">
//           <span className="text-sm font-bold">Apartment Type</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">4 Beds</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">2 Baths</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">1200m²</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
// import React from "react";
// import { FaHeart, FaEye, FaRegListAlt } from "react-icons/fa"; // Importing icons from react-icons

// const Card = ({ image, title, price, location }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-lg">
//       {/* Image container with relative positioning */}
//       <div className="relative">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-60 object-cover rounded-md"
//         />

//         {/* Featured button at top left */}
//         <button className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
//           Featured
//         </button>

//         {/* RENT button at top right */}
//         <button className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
//           RENT
//         </button>

//         {/* Bottom right icons */}
//          <div className="absolute bottom-2 right-2 flex space-x-2 z-20">
//           {/* {/* Preview Icon */
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaEye size={18} />
//           </button>

//           {/* Favorite Icon */
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaHeart size={18} />
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaRegListAlt size={18} />
//           </button>
//         </div> */}
//       </div>

//       {/* Title and other details */}
//       <h2 className="text-xl font-semibold mt-4">{title}</h2>
//       <p className="text-lg text-gray-600">{price}</p>
//       <p className="text-sm text-gray-500">{location}</p>

//       {/* Additional property details */}
//       <div className="flex space-x-4 mt-3">
//         <div className="flex items-center">
//           <span className="text-sm font-bold">Apartment Type</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">4 Beds</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">2 Baths</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">1200m²</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
// import React from "react";
// import { FaHeart, FaEye, FaRegListAlt } from "react-icons/fa"; // Importing icons from react-icons

// const Card = ({ image, title, price, location }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-lg">
//       {/* Image container with relative positioning */}
//       <div className="relative">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-60 object-cover rounded-md"
//         />

//         {/* Featured button at top left */}
//         <button className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
//           Featured
//         </button>

//         {/* RENT button at top right */}
//         <button className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full z-10">
//           RENT
//         </button>

//         {/* Bottom right icons */}
//         <div className="absolute bottom-2 right-2 flex space-x-2 z-20">
//           {/* Preview Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaEye size={18} />
//           </button>

//           {/* Favorite Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaHeart size={18} />
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaRegListAlt size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Title and other details */}
//       <h2 className="text-xl font-semibold mt-4">{title}</h2>
//       <p className="text-lg text-gray-600">{price}</p>
//       <p className="text-sm text-gray-500">{location}</p>

//       {/* Additional property details */}
//       <div className="flex space-x-4 mt-3">
//         <div className="flex items-center">
//           <span className="text-sm font-bold">Apartment Type</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">4 Beds</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">2 Baths</span>
//         </div>
//         <div className="flex items-center">
//           <span className="text-sm font-bold">1200m²</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
// import React from "react";
// import {
//   FaHeart,
//   FaEye,
//   FaRegListAlt,
//   FaBed,
//   FaBath,
//   FaCar,
//   FaRuler,
// } from "react-icons/fa"; // Importing additional icons

// const Card = ({ image, title, price, location }) => {
//   return (
//     <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//       {/* Image container with relative positioning */}
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-52 object-cover" />

//         {/* Featured badge */}
//         <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
//           FEATURED
//         </div>

//         {/* RENT/BUY badge */}
//         <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded">
//           RENT
//         </div>

//         {/* Icons at the bottom-right of the image */}
//         <div className="absolute bottom-2 right-2 flex space-x-2">
//           {/* Preview Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaEye size={16} />
//           </button>

//           {/* Favorite Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaHeart size={16} />
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//             <FaRegListAlt size={16} />
//           </button>
//         </div>
//       </div>

//       {/* Title, price, and location */}
//       <div className="p-4">
//         <h2 className="text-lg font-semibold truncate">{title}</h2>
//         <p className="text-gray-600 text-sm">{price}</p>
//         <p className="text-gray-500 text-xs">{location}</p>

//         {/* Property details */}
//         <div className="flex justify-between items-center text-gray-600 text-sm mt-4">
//           <div className="flex items-center space-x-1">
//             <FaBed size={14} />
//             <span>4 Beds</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaBath size={14} />
//             <span>2 Baths</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaCar size={14} />
//             <span>1 Garage</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaRuler size={14} />
//             <span>1200 m²</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
// import React from "react";
// import { IoAddCircleOutline } from "react-icons/io5";
// import { FaBed, FaBath, FaCar } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { AiOutlineExpandAlt } from "react-icons/ai";
// import { MdOutlineSquareFoot } from "react-icons/md";

// const Card = ({ image, title, price, location }) => {
//   return (
//     <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//       {/* Image container with relative positioning */}
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-52 object-cover" />

//         {/* Featured badge */}
//         <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
//           FEATURED
//         </div>

//         {/* RENT/BUY badge */}
//         <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded">
//           RENT
//         </div>

//         {/* Bottom-right icons */}
//         <div className="absolute bottom-2 right-2 flex space-x-2 z-10">
//           {/* Favorite Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200">
//             <FaRegHeart size={16} className="text-gray-700" />
//           </button>

//           {/* Preview Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200">
//             <AiOutlineExpandAlt size={16} className="text-gray-700" />
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200">
//             <IoAddCircleOutline
//               size={16}
//               className="text-gray-700 border-white"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Title, price, and location */}
//       <div className="p-4">
//         <h2 className="text-lg font-semibold truncate">{title}</h2>
//         <p className="text-gray-600 text-sm">{price}</p>
//         <p className="text-gray-500 text-xs">{location}</p>

//         {/* Property details */}
//         <div className="flex justify-between items-center text-gray-600 text-sm mt-4">
//           <div className="flex items-center space-x-1">
//             <FaBed size={14} />
//             <span>4 Beds</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaBath size={14} />
//             <span>2 Baths</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaCar size={14} />
//             <span>1 Garage</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <MdOutlineSquareFoot size={14} />
//             <span>1200 m²</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
// import React from "react";
// import { IoAddCircleOutline } from "react-icons/io5";
// import { FaBed, FaBath, FaCar, FaRegHeart } from "react-icons/fa";
// import { AiOutlineExpandAlt } from "react-icons/ai";
// import { MdOutlineSquareFoot } from "react-icons/md";

// const Card = ({
//   image,
//   title,
//   price,
//   location,
//   onRentClick,
//   onBuyClick,
//   onTitleClick,
// }) => {
//   return (
//     <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//       {/* Image container with relative positioning */}
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-52 object-cover" />

//         {/* Featured badge */}
//         <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
//           FEATURED
//         </div>

//         {/* RENT/BUY badge */}
//         <div
//           className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded cursor-pointer"
//           onClick={onRentClick}
//         >
//           RENT
//         </div>

//         <div
//           className="absolute top-2 right-16 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded cursor-pointer"
//           onClick={onBuyClick}
//         >
//           BUY
//         </div>

//         {/* Bottom-right icons */}
//         <div className="absolute bottom-2 right-2 flex space-x-2 z-10">
//           {/* Favorite Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
//             <FaRegHeart size={16} className="text-gray-700" />
//             <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
//               Favorite
//             </span>
//           </button>

//           {/* Preview Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
//             <AiOutlineExpandAlt size={16} className="text-gray-700" />
//             <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
//               Preview
//             </span>
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
//             <IoAddCircleOutline size={16} className="text-gray-700" />
//             <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
//               Add to Compare
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Title, price, and location */}
//       <div className="p-4">
//         <h2
//           className="text-lg font-semibold truncate cursor-pointer"
//           onClick={onTitleClick}
//           title={title} // Displays the full title on hover
//         >
//           {title.length > 14 ? `${title.substring(0, 14)}...` : title}
//         </h2>
//         <p className="text-gray-600 text-sm">{price}</p>
//         <p className="text-gray-500 text-xs">{location}</p>

//         {/* Property details */}
//         <div className="flex justify-between items-center text-gray-600 text-sm mt-4">
//           <div className="flex items-center space-x-1">
//             <FaBed size={14} />
//             <span>4 Beds</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaBath size={14} />
//             <span>2 Baths</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaCar size={14} />
//             <span>1 Garage</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <MdOutlineSquareFoot size={14} />
//             <span>1200 m²</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { IoAddCircleOutline } from "react-icons/io5";
// import { FaBed, FaBath, FaCar, FaRegHeart } from "react-icons/fa";
// import { AiOutlineExpandAlt } from "react-icons/ai";
// import { MdOutlineSquareFoot } from "react-icons/md";

// const Card = ({ image, title, price, location, onRentClick, onTitleClick }) => {
//   const navigate = useNavigate();

//   const handleBuyClick = () => {
//     // navigate("/buy"); // Redirect to the Buy page
//     navigate(`/buy/${propertyId}`);
//   };

//   return (
//     <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//       {/* Image container with relative positioning */}
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-52 object-cover" />

//         {/* Featured badge */}
//         <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
//           FEATURED
//         </div>

//         {/* RENT/BUY badge */}
//         <div
//           className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded cursor-pointer"
//           onClick={onRentClick}
//         >
//           RENT
//         </div>

//         <div
//           className="absolute top-2 right-16 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-bold rounded cursor-pointer"
//           onClick={handleBuyClick}
//         >
//           BUY
//         </div>

//         {/* Bottom-right icons */}
//         <div className="absolute bottom-2 right-2 flex space-x-2 z-10">
//           {/* Favorite Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
//             <FaRegHeart size={16} className="text-gray-700" />
//             <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
//               Favorite
//             </span>
//           </button>

//           {/* Preview Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
//             <AiOutlineExpandAlt size={16} className="text-gray-700" />
//             <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
//               Preview
//             </span>
//           </button>

//           {/* Add to Compare Icon */}
//           <button className="bg-none p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200 relative group">
//             <IoAddCircleOutline size={16} className="text-gray-700" />
//             <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
//               Add to Compare
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Title, price, and location */}
//       <div className="p-4">
//         <h2
//           className="text-lg font-semibold truncate cursor-pointer"
//           onClick={onTitleClick}
//           title={title} // Displays the full title on hover
//         >
//           {title.length > 14 ? `${title.substring(0, 14)}...` : title}
//         </h2>
//         <p className="text-gray-600 text-sm">{price}</p>
//         <p className="text-gray-500 text-xs">{location}</p>

//         {/* Property details */}
//         <div className="flex justify-between items-center text-gray-600 text-sm mt-4">
//           <div className="flex items-center space-x-1">
//             <FaBed size={14} />
//             <span>4 Beds</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaBath size={14} />
//             <span>2 Baths</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaCar size={14} />
//             <span>1 Garage</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <MdOutlineSquareFoot size={14} />
//             <span>1200 m²</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
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
      navigate(`/buy/${propertyId}`); // Navigate to Buy page
    } else {
      navigate(`/rent/${propertyId}`); // Navigate to Rent page (or wherever applicable)
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
