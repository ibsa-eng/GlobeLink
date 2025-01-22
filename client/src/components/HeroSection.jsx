// import React from "react";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: "url('https://example.com/your-background-image.jpg')",
//       }}
//     >
//       {" "}
//       {/* Replace with your background image URL */}
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       {/* Logo and Navigation */}
//       <div className="relative z-10 px-6 md:px-12 flex justify-between items-center py-4">
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
//           alt="GlobeLink Logo"
//           className="h-12"
//         />

//         <nav className="flex space-x-6 text-white font-semibold">
//           <a href="#home" className="hover:text-blue-400">
//             HOME
//           </a>
//           <a href="#buy" className="hover:text-blue-400">
//             BUY
//           </a>
//           <a href="#off-plan" className="hover:text-blue-400">
//             OFF-PLAN
//           </a>
//           <a href="#rent" className="hover:text-blue-400">
//             RENT
//           </a>
//           <a href="#media" className="hover:text-blue-400">
//             MEDIA
//           </a>
//           <a href="#contact" className="hover:text-blue-400">
//             CONTACT
//           </a>
//         </nav>

//         <div className="text-white font-medium">English</div>
//       </div>
//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white mt-20">
//         <h1 className="text-5xl font-bold">Globally Yours</h1>
//         <p className="text-lg mt-4">CHOOSE YOUR REALITY DREAM</p>
//       </div>
//       {/* Search Bar */}
//       <div className="relative z-10 mt-20 mx-auto max-w-4xl bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
//         <select className="bg-gray-100 p-2 rounded-md flex-1">
//           <option value="all-world">All World</option>
//           {/* Add more options */}
//         </select>
//         <input
//           type="text"
//           placeholder="Enter keyword..."
//           className="bg-gray-100 p-2 rounded-md flex-grow"
//         />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//           All
//         </button>
//         <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
//           Buy
//         </button>
//         <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
//           Off-Plan
//         </button>
//         <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
//           Rent
//         </button>
//       </div>
//       {/* Customer Support */}
//       <div className="absolute bottom-8 right-8 bg-white p-4 rounded-md shadow-lg w-64">
//         <div className="flex items-center mb-2">
//           <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
//             <span role="img" aria-label="Customer Support">
//               👤
//             </span>
//           </div>
//           <div className="ml-4">
//             <p className="font-semibold">Customer Support</p>
//             <p className="text-gray-500 text-sm">5 hours ago</p>
//           </div>
//         </div>
//         <div className="text-gray-700">
//           <p>👋 Hi! How can we help?</p>
//         </div>
//       </div>
//       {/* Chat Input */}
//       <div className="absolute bottom-4 right-8 flex items-center space-x-2">
//         <input
//           type="text"
//           placeholder="Type here and press enter..."
//           className="bg-gray-200 p-2 rounded-md w-64"
//         />
//         <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">
//           Send
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: "url('https://example.com/your-background-image.jpg')", // Replace with your actual background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Navigation */}
//       <div className="relative z-10 px-6 md:px-12 flex justify-between items-center py-4">
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
//           alt="GlobeLink Logo"
//           className="h-12"
//         />
//         <nav className="flex space-x-6 text-white font-semibold">
//           <a href="#home" className="hover:text-blue-400">
//             HOME
//           </a>
//           <a href="#buy" className="hover:text-blue-400">
//             BUY
//           </a>
//           <a href="#off-plan" className="hover:text-blue-400">
//             OFF-PLAN
//           </a>
//           <a href="#rent" className="hover:text-blue-400">
//             RENT
//           </a>
//           <a href="#media" className="hover:text-blue-400">
//             MEDIA
//           </a>
//           <a href="#contact" className="hover:text-blue-400">
//             CONTACT
//           </a>
//         </nav>
//         <div className="text-white font-medium">English</div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white mt-16">
//         <h1 className="text-5xl font-bold">Globally Yours</h1>
//         <p className="text-lg mt-2">CHOOSE YOUR REALITY DREAM</p>
//       </div>

//       {/* Buttons */}
//       <div className="relative z-10 mt-10 flex justify-center space-x-4">
//         <button className="bg-blue-500 text-white px-8 py-3 font-semibold rounded-t-md">
//           All
//         </button>
//         <button className="bg-gray-200 text-black px-8 py-3 font-semibold rounded-t-md">
//           Buy
//         </button>
//         <button className="bg-gray-200 text-black px-8 py-3 font-semibold rounded-t-md">
//           Off-Plan
//         </button>
//         <button className="bg-gray-200 text-black px-8 py-3 font-semibold rounded-t-md">
//           Rent
//         </button>
//       </div>

//       {/* Search Bar */}

//       <div className="relative z-10 mt-0">
//         <div className="bg-white shadow-md flex items-center w-full">
//           {/* Dropdown */}
//           <select className="bg-gray-100 p-4 rounded-none flex-1 border-r border-gray-300">
//             <option value="all-world">All World</option>
//             {/* Add more options */}
//           </select>

//           {/* Input */}
//           <input
//             type="text"
//             placeholder="Enter keyword..."
//             className="bg-gray-100 p-4 flex-grow border-r border-gray-300"
//           />

//           {/* Search Button */}
//           <button className="bg-blue-500 text-white p-4 rounded-none font-semibold">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Chat Box */}
//     </section>
//   );
// };

// export default HeroSection;
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: "url('https://example.com/your-background-image.jpg')", // Replace with your actual background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Navigation */}
//       <div className="relative z-10 px-6 md:px-12 flex justify-between items-center py-4">
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
//           alt="GlobeLink Logo"
//           className="h-12"
//         />
//         <nav className="flex space-x-6 text-white font-semibold">
//           <a href="#home" className="hover:text-blue-400">
//             HOME
//           </a>
//           <a href="#buy" className="hover:text-blue-400">
//             BUY
//           </a>
//           <a href="#off-plan" className="hover:text-blue-400">
//             OFF-PLAN
//           </a>
//           <a href="#rent" className="hover:text-blue-400">
//             RENT
//           </a>
//           <a href="#media" className="hover:text-blue-400">
//             MEDIA
//           </a>
//           <a href="#contact" className="hover:text-blue-400">
//             CONTACT
//           </a>
//         </nav>
//         <div className="text-white font-medium">English</div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white mt-16">
//         <h1 className="text-5xl font-bold">Globally Yours</h1>
//         <p className="text-lg mt-2">CHOOSE YOUR REALITY DREAM</p>
//       </div>

//       {/* Buttons */}
//       <div className="relative z-10 mt-10 flex justify-center gap-0">
//         <button className="bg-blue-500 text-white px-8 py-3 font-semibold rounded-tl-md">
//           All
//         </button>
//         <button className="bg-gray-200 text-black px-8 py-3 font-semibold">
//           Buy
//         </button>
//         <button className="bg-gray-200 text-black px-8 py-3 font-semibold">
//           Off-Plan
//         </button>
//         <button className="bg-gray-200 text-black px-8 py-3 font-semibold rounded-tr-md">
//           Rent
//         </button>
//       </div>

//       <div className="relative z-10 mt-0">
//         <div className="bg-white shadow-md flex items-center w-full">
//           {/* Dropdown */}
//           <select className="bg-gray-100 px-6 py-3 border border-gray-300 text-gray-700 rounded-l-md flex-shrink-0">
//             <option value="all-world">All World</option>
//             {/* Add more options */}
//           </select>

//           {/* Input */}
//           <input
//             type="text"
//             placeholder="Enter keyword..."
//             className="bg-gray-100 px-6 py-3 flex-grow border-t border-b border-gray-300 text-gray-700"
//           />

//           {/* Search Button */}
//           <button className="bg-blue-500 text-white px-6 py-3 rounded-r-md font-semibold border border-blue-500 flex-shrink-0">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: "url('https://example.com/your-background-image.jpg')", // Replace with your actual background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Navigation */}
//       <div className="relative z-10 px-6 md:px-12 flex justify-between items-center py-4">
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
//           alt="GlobeLink Logo"
//           className="h-12"
//         />
//         <nav className="flex space-x-6 text-white font-semibold">
//           <a href="#home" className="hover:text-blue-400">
//             HOME
//           </a>
//           <a href="#buy" className="hover:text-blue-400">
//             BUY
//           </a>
//           <a href="#off-plan" className="hover:text-blue-400">
//             OFF-PLAN
//           </a>
//           <a href="#rent" className="hover:text-blue-400">
//             RENT
//           </a>
//           <a href="#media" className="hover:text-blue-400">
//             MEDIA
//           </a>
//           <a href="#contact" className="hover:text-blue-400">
//             CONTACT
//           </a>
//         </nav>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white mt-16">
//         <h1 className="text-5xl font-bold">Globally Yours</h1>
//         <p className="text-lg mt-2">CHOOSE YOUR REALITY DREAM</p>
//       </div>

//       {/* Buttons */}
//       <div className="relative z-10 mt-10 flex justify-center gap-0">
//         <button className="bg-white text-black px-8 py-3 font-semibold rounded-tl-md border border-gray-300">
//           All
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-8 py-3 font-semibold border border-gray-300">
//           Buy
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-8 py-3 font-semibold border border-gray-300">
//           Off-Plan
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-8 py-3 font-semibold rounded-tr-md border border-gray-300">
//           Rent
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="relative z-10 mt-0">
//         <div className="bg-white shadow-md flex items-center w-full">
//           {/* Dropdown */}
//           <select className="bg-gray-100 px-6 py-3 border border-gray-300 text-gray-700 rounded-l-md flex-shrink-0">
//             <option value="all-world">All World</option>
//           </select>

//           {/* Input */}
//           <input
//             type="text"
//             placeholder="Enter keyword..."
//             className="bg-gray-100 px-6 py-3 flex-grow border-t border-b border-gray-300 text-gray-700"
//           />

//           {/* Search Button */}
//           <button className="bg-[rgb(211,163,85)] text-white px-6 py-3 rounded-r-md font-semibold border border-gray-300 flex-shrink-0 hover:bg-[rgb(47,73,85)]">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// {/* <div className="relative z-10 mt-0">
//   <div className="bg-white shadow-md flex items-center w-full">
//     {/* Dropdown */}
//     <select className="bg-gray-100 px-6 py-3 flex-1 border border-gray-300 text-gray-700 rounded-l-md">
//       <option value="all-world">All World</option>
//       {/* Add more options */}
//     </select>

//     {/* Input */}
//     <input
//       type="text"
//       placeholder="Enter keyword..."
//       className="bg-gray-100 px-6 py-3 flex-grow border-t border-b border-gray-300 text-gray-700"
//     />

//     {/* Search Button */}
//     <button className="bg-blue-500 text-white px-6 py-3 rounded-r-md font-semibold border border-blue-500">
//       Search
//     </button>
//   </div>
// </div>; */}
// //   <div className="relative z-10 mt-0">
// //     <div className="bg-white shadow-md flex items-center w-full">
// //       {/* Dropdown */}
// //       <select className="bg-gray-100 p-4 rounded-none flex-1 border-r border-gray-300">
// //         <option value="all-world">All World</option>
// //         {/* Add more options */}
// //       </select>

// //       {/* Input */}
// //       <input
// //         type="text"
// //         placeholder="Enter keyword..."
// //         className="bg-gray-100 p-4 flex-grow border-r border-gray-300"
// //       />

// //       {/* Search Button */}
// //       <button className="bg-blue-500 text-white p-4 rounded-none font-semibold">
// //         Search
// //       </button>
// //     </div>
// //   </div>;
// import React, { useState } from "react";

// const HeroSection = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const handleMouseEnter = () => {
//     setIsDropdownVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownVisible(false);
//   };

//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: "url('https://example.com/your-background-image.jpg')", // Replace with your actual background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Navigation */}
//       <div className="relative z-10 px-6 md:px-12 flex justify-between items-center py-4">
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
//           alt="GlobeLink Logo"
//           className="h-12"
//         />
//         <nav className="flex space-x-6 text-white font-semibold relative">
//           {/* Home Button with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a href="#home" className="hover:text-blue-400 flex items-center">
//               HOME <span className="ml-1">▼</span>
//             </a>
//             {isDropdownVisible && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2">
//                 <a
//                   href="#about-us"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   ABOUT US
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#buy" className="hover:text-blue-400">
//             BUY
//           </a>
//           <a href="#off-plan" className="hover:text-blue-400">
//             OFF-PLAN
//           </a>
//           <a href="#rent" className="hover:text-blue-400">
//             RENT
//           </a>
//           <a href="#media" className="hover:text-blue-400">
//             MEDIA
//           </a>
//           <a href="#contact" className="hover:text-blue-400">
//             CONTACT
//           </a>
//         </nav>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white mt-16">
//         <h1 className="text-5xl font-bold">Globally Yours</h1>
//         <p className="text-lg mt-2">CHOOSE YOUR REALITY DREAM</p>
//       </div>

//       {/* Buttons */}
//       <div className="relative z-10 mt-10 flex justify-center gap-0">
//         <button className="bg-white text-black px-8 py-3 font-semibold rounded-tl-md border border-gray-300">
//           All
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-8 py-3 font-semibold border border-gray-300">
//           Buy
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-8 py-3 font-semibold border border-gray-300">
//           Off-Plan
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-8 py-3 font-semibold rounded-tr-md border border-gray-300">
//           Rent
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="relative z-10 mt-0">
//         <div className="bg-white shadow-md flex items-center w-full">
//           {/* Dropdown */}
//           <select className="bg-gray-100 px-6 py-3 border border-gray-300 text-gray-700 rounded-l-md flex-shrink-0">
//             <option value="all-world">All World</option>
//           </select>

//           {/* Input */}
//           <input
//             type="text"
//             placeholder="Enter keyword..."
//             className="bg-gray-100 px-6 py-3 flex-grow border-t border-b border-gray-300 text-gray-700"
//           />

//           {/* Search Button */}
//           <button className="bg-[rgb(211,163,85)] text-white px-6 py-3 rounded-r-md font-semibold border border-gray-300 flex-shrink-0 hover:bg-[rgb(47,73,85)]">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
// for the bove home works very well
// export default HeroSection;
// import React, { useState, useEffect } from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const HeroSection = () => {
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const [backgroundImage, setBackgroundImage] = useState(
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg" // Initial background image
//   );

//   const backgroundImages = [
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul2-e1734937825583.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Addis_Ababa_Lion_Statue_FCS.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/nature-istanbul-turkey-city-wallpaper-preview.jpg",
//   ];
//   // Cycle through background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundImage((prev) => {
//         const currentIndex = backgroundImages.indexOf(prev);
//         const nextIndex = (currentIndex + 1) % backgroundImages.length;
//         return backgroundImages[nextIndex];
//       });
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const handleMouseEnter = (menu) => {
//     setHoveredMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setHoveredMenu(null);
//   };

//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: `url('${backgroundImage}')`, // Dynamic background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Navigation */}
//       {/* <div className="relative z-10 px-12 md:px-12 flex justify-between items-center py-4">
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1-496x323.png"
//           alt="GlobeLink Logo"
//           className="w-[250px] h-[55px] object-contain" // Logo size set to 250x55
//         /> */}
//       <div className="text-white px-6 py-4 flex justify-between items-center">
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
//           alt="Logo"
//           className="w-[250px] h-[55px] object-contain"
//         />
//         <nav className="flex space-x-6 text-white font-semibold relative">
//           {/* Home Button with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter("home")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a href="#home" className="hover:text-blue-400 flex items-center">
//               HOME{" "}
//               <span className="ml-1">
//                 <IoIosArrowDown />
//               </span>
//             </a>
//             {hoveredMenu === "home" && (
//               //   <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2">
//               //     <a
//               //       href="#about-us"
//               //       className="block px-14 py-2 hover:bg-gray-200 text-start"
//               //     >
//               //       ABOUT US
//               //     </a>
//               //   </div>
//               <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2">
//                 <a
//                   href="#about-us"
//                   className="block px-12 py-2 hover:bg-gray-200 text-"
//                 >
//                   ABOUT US
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#buy" className="hover:text-blue-400">
//             BUY
//           </a>
//           <a href="#off-plan" className="hover:text-blue-400">
//             OFF-PLAN
//           </a>
//           <a href="#rent" className="hover:text-blue-400">
//             RENT
//           </a>

//           {/* Media Button with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter("media")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a href="#media" className="hover:text-blue-400 flex items-center">
//               MEDIA{" "}
//               <span className="ml-1">
//                 <IoIosArrowDown />
//               </span>
//             </a>
//             {hoveredMenu === "media" && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2">
//                 <a href="#blog" className="block px-14 py-2 hover:bg-gray-200">
//                   BLOG
//                 </a>
//                 <a
//                   href="#gallery"
//                   className="block px-14 py-2 hover:bg-gray-200"
//                 >
//                   GALLERY
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Contact Button with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter("contact")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a
//               href="#contact"
//               className="hover:text-blue-400 flex items-center"
//             >
//               CONTACT{" "}
//               <span className="ml-1">
//                 <IoIosArrowDown />
//               </span>
//             </a>
//             {hoveredMenu === "contact" && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2">
//                 <a
//                   href="#our-agents"
//                   className="block px-14 py-2 hover:bg-gray-200"
//                 >
//                   OUR AGENTS
//                 </a>
//                 <a href="#faqs" className="block px-14 py-2 hover:bg-gray-200">
//                   FAQS
//                 </a>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white mt-16">
//         <h1 className="text-5xl font-bold">Globally Yours</h1>
//         <p className="text-lg mt-2">CHOOSE YOUR REALITY DREAM</p>
//       </div>

//       {/* Buttons */}
//       <div className="relative z-10 mt-10 flex justify-center gap-0.5">
//         <button className="bg-white text-black px-8 py-3 font-semibold rounded-tl-md border border-none">
//           All
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-12 py-3 font-semibold border border-none">
//           Buy
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-16 py-3 font-semibold border border-none">
//           Off-Plan
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-14 py-3 font-semibold rounded-tr-md border border-none">
//           Rent
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="relative z-10 mt-0">
//         <div className="bg-white shadow-md flex items-center w-full">
//           {/* Dropdown */}
//           <select className="bg-gray-100 px-6 py-5 border border-gray-300 text-gray-700 rounded-l-md flex-shrink-0">
//             <option value="all-world">All WORLD</option>
//             <option value="turkiye">TURKIYE</option>
//             <option value="ethiopia">Ethiopia</option>
//             <option value="uae">UAE</option>
//           </select>

//           {/* Input */}
//           <input
//             type="text"
//             placeholder="Enter keyword..."
//             className="bg-gray-100 px-6 py-5 flex-grow border-t border-b border-gray-300 text-gray-700"
//           />

//           {/* Search Button */}
//           <button className="bg-[rgb(211,163,85)] text-white px-6 py-5 rounded-r-md font-semibold border border-gray-300 flex-shrink-0 hover:bg-[rgb(47,73,85)]">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// import React, { useState, useEffect } from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const HeroSection = () => {
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const [backgroundImage, setBackgroundImage] = useState(
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg"
//   );
//   const [isFixed, setIsFixed] = useState(false); // Track if the nav is fixed

//   const backgroundImages = [
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul2-e1734937825583.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Addis_Ababa_Lion_Statue_FCS.jpg",
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/nature-istanbul-turkey-city-wallpaper-preview.jpg",
//   ];

//   // Cycle through background images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundImage((prev) => {
//         const currentIndex = backgroundImages.indexOf(prev);
//         const nextIndex = (currentIndex + 1) % backgroundImages.length;
//         return backgroundImages[nextIndex];
//       });
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsFixed(true); // Add fixed position when scroll down
//       } else {
//         setIsFixed(false); // Remove fixed position when at the top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleMouseEnter = (menu) => {
//     setHoveredMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setHoveredMenu(null);
//   };

//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: `url('${backgroundImage}')`, // Dynamic background image
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Navigation */}
//       <div
//         className={`text-white px-6 py-4 flex justify-between items-center ${
//           isFixed ? "fixed top-0 left-0 w-full bg-white z-10 shadow-md" : ""
//         }`}
//       >
//         <img
//           src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
//           alt="Logo"
//           className="w-[250px] h-[55px] object-contain"
//         />
//         <nav className="flex space-x-6 text-white font-semibold relative">
//           {/* Home Button with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter("home")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a
//               href="#home"
//               className={`flex items-center ${
//                 isFixed ? "text-[rgb(47,73,85)]" : "text-white"
//               } hover:text-blue-400`}
//             >
//               HOME{" "}
//               <span className="ml-1">
//                 <IoIosArrowDown />
//               </span>
//             </a>

//             {hoveredMenu === "home" && (
//               //   <div className="absolute top-full left-0 bg-white text-black shadow-lg box-border mt-2">
//               //     <a
//               //       href="#about-us"
//               //       className="block px-12 py-2 hover:bg-gray-200"
//               //     >
//               //       ABOUT US
//               //     </a>
//               //   </div>
//               <div className="absolute top-full left-0 bg-white text-black shadow-lg box-border mt-2 w-max">
//                 <a
//                   href="#about-us"
//                   className="block px-12 py-2 hover:bg-gray-200 text-left"
//                 >
//                   ABOUT US
//                 </a>
//               </div>
//             )}
//           </div>

//           <a
//             href="#buy"
//             className={`hover:text-blue-400 ${
//               isFixed ? "text-[rgb(47,73,85)]" : "text-white"
//             }`}
//           >
//             BUY
//           </a>
//           <a
//             href="#off-plan"
//             className={`hover:text-blue-400 ${
//               isFixed ? "text-[rgb(47,73,85)]" : "text-white"
//             }`}
//           >
//             OFF-PLAN
//           </a>
//           <a
//             href="#rent"
//             className={`hover:text-blue-400 ${
//               isFixed ? "text-[rgb(47,73,85)]" : "text-white"
//             }`}
//           >
//             RENT
//           </a>

//           {/* Media Button with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter("media")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a
//               href="#media"
//               className={`flex items-center ${
//                 isFixed ? "text-[rgb(47,73,85)]" : "text-white"
//               } hover:text-blue-400`}
//             >
//               MEDIA{" "}
//               <span className="ml-1">
//                 <IoIosArrowDown />
//               </span>
//             </a>
//             {hoveredMenu === "media" && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-lg box-border mt-2">
//                 <a href="#blog" className="block px-12 py-2 hover:bg-gray-200">
//                   BLOG
//                 </a>
//                 <a
//                   href="#gallery"
//                   className="block px-12 py-2 hover:bg-gray-200"
//                 >
//                   GALLERY
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Contact Button with Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleMouseEnter("contact")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a
//               href="#contact"
//               className={`flex items-center ${
//                 isFixed ? "text-[rgb(47,73,85)]" : "text-white"
//               } hover:text-blue-400`}
//             >
//               CONTACT{" "}
//               <span className="ml-1">
//                 <IoIosArrowDown />
//               </span>
//             </a>
//             {hoveredMenu === "contact" && (
//               <div className="absolute top-full left-0 bg-white text-black shadow-lg box-border mt-2 w-max">
//                 <a
//                   href="#our-agents"
//                   className="block px-12 py-2 hover:bg-gray-200 text-left  w-full"
//                 >
//                   OUR AGENTS
//                 </a>
//                 <a href="#faqs" className="block px-12 py-2 hover:bg-gray-200">
//                   FAQS
//                 </a>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white mt-16">
//         <h1 className="text-5xl font-bold">Globally Yours</h1>
//         <p className="text-lg mt-2">CHOOSE YOUR REALITY DREAM</p>
//       </div>

//       {/* Buttons */}
//       <div className="relative z-10 mt-10 flex justify-center gap-0.5">
//         <button className="bg-white text-black px-8 py-3 font-semibold rounded-tl-md border border-none">
//           All
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-12 py-3 font-semibold border border-none">
//           Buy
//         </button>
//         <button className="bg-[rgb(47,73,85)] text-white px-16 py-3 font-semibold border border-none">
//           Off-Plan
//         </button>
//         <button
//           className={`bg-[rgb(47,73,85)] text-white px-14 py-3 font-semibold rounded-tr-md border border-none ${
//             isFixed ? "text-[rgb(47,73,85)]" : ""
//           }`}
//         >
//           Rent
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="relative z-10 mt-0">
//         <div className="bg-white shadow-md flex items-center w-full">
//           {/* Dropdown */}
//           <select className="bg-gray-100 px-6 py-5 border border-gray-300 text-gray-700 rounded-l-md flex-shrink-0">
//             <option value="all-world">All WORLD</option>
//             <option value="turkiye">TURKIYE</option>
//             <option value="ethiopia">Ethiopia</option>
//             <option value="uae">UAE</option>
//           </select>

//           {/* Input */}
//           <input
//             type="text"
//             placeholder="Enter keyword..."
//             className="bg-gray-100 px-6 py-5 flex-grow border-t border-b border-gray-300 text-gray-700"
//           />

//           {/* Search Button */}
//           <button className="bg-[rgb(211,163,85)] text-white px-6 py-5 rounded-r-md font-semibold border border-gray-300 flex-shrink-0 hover:bg-[rgb(47,73,85)]">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ChatBot from "./ChatBot";
const HeroSection = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isFixed, setIsFixed] = useState(false); // Track if the nav is fixed

  const videoSrc =
    "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/GlobLinkProp_Home_Video_2.mp4"; // Add the URL of your background video here

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true); // Add fixed position when scroll down
      } else {
        setIsFixed(false); // Remove fixed position when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: -1, // Ensure the video stays in the background
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation */}
      <div
        className={`text-white px-6 py-4 flex justify-between items-center ${
          isFixed ? "fixed top-0 left-0 w-full bg-white z-10 shadow-md" : ""
        }`}
      >
        <img
          src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
          alt="Logo"
          className="w-[250px] h-[55px] object-contain"
        />
        <nav className="flex space-x-6 text-white font-semibold relative">
          {/* Home Button with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#home"
              className={`flex items-center ${
                isFixed ? "text-[rgb(47,73,85)]" : "text-white"
              } hover:text-blue-400`}
            >
              HOME{" "}
              <span className="ml-1">
                <IoIosArrowDown />
              </span>
            </a>
            {hoveredMenu === "home" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-lg box-border mt-2 w-max">
                <a
                  href="#about-us"
                  className="block px-12 py-2 hover:bg-gray-200 text-left"
                >
                  ABOUT US
                </a>
              </div>
            )}
          </div>

          <a
            href="#buy"
            className={`hover:text-blue-400 ${
              isFixed ? "text-[rgb(47,73,85)]" : "text-white"
            }`}
          >
            BUY
          </a>
          <a
            href="#off-plan"
            className={`hover:text-blue-400 ${
              isFixed ? "text-[rgb(47,73,85)]" : "text-white"
            }`}
          >
            OFF-PLAN
          </a>
          <a
            href="#rent"
            className={`hover:text-blue-400 ${
              isFixed ? "text-[rgb(47,73,85)]" : "text-white"
            }`}
          >
            RENT
          </a>

          {/* Media Button with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("media")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#media"
              className={`flex items-center ${
                isFixed ? "text-[rgb(47,73,85)]" : "text-white"
              } hover:text-blue-400`}
            >
              MEDIA{" "}
              <span className="ml-1">
                <IoIosArrowDown />
              </span>
            </a>
            {hoveredMenu === "media" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-lg box-border mt-2">
                <a href="#blog" className="block px-12 py-2 hover:bg-gray-200">
                  BLOG
                </a>
                <a
                  href="#gallery"
                  className="block px-12 py-2 hover:bg-gray-200"
                >
                  GALLERY
                </a>
              </div>
            )}
          </div>

          {/* Contact Button with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#contact"
              className={`flex items-center ${
                isFixed ? "text-[rgb(47,73,85)]" : "text-white"
              } hover:text-blue-400`}
            >
              CONTACT{" "}
              <span className="ml-1">
                <IoIosArrowDown />
              </span>
            </a>
            {hoveredMenu === "contact" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-lg box-border mt-2 w-max">
                <a
                  href="#our-agents"
                  className="block px-12 py-2 hover:bg-gray-200 text-left  w-full"
                >
                  OUR AGENTS
                </a>
                <a href="#faqs" className="block px-12 py-2 hover:bg-gray-200">
                  FAQS
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white mt-16">
        <h1 className="text-5xl font-bold">Globally Yours</h1>
        <p className="text-lg mt-2">CHOOSE YOUR REALITY DREAM</p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 mt-10 flex justify-center gap-0.5">
        <button className="bg-white text-black px-8 py-3 font-semibold rounded-tl-md border border-none">
          All
        </button>
        <button className="bg-[rgb(47,73,85)] text-white px-12 py-3 font-semibold border border-none">
          Buy
        </button>
        <button className="bg-[rgb(47,73,85)] text-white px-16 py-3 font-semibold border border-none">
          Off-Plan
        </button>
        <button
          className={`bg-[rgb(47,73,85)] text-white px-14 py-3 font-semibold rounded-tr-md border border-none ${
            isFixed ? "text-[rgb(47,73,85)]" : ""
          }`}
        >
          Rent
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative z-10 mt-0">
        <div className="bg-white shadow-md flex items-center w-full">
          {/* Dropdown */}
          <select className="bg-gray-100 px-6 py-5 border border-gray-300 text-gray-700 rounded-l-md flex-shrink-0">
            <option value="all-world">All WORLD</option>
            <option value="turkiye">TURKIYE</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="uae">UAE</option>
          </select>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter keyword..."
            className="bg-gray-100 px-6 py-5 flex-grow border-t border-b border-gray-300 text-gray-700"
          />

          {/* Search Button */}
          <button className="bg-[rgb(211,163,85)] text-white px-6 py-5 rounded-r-md font-semibold border border-gray-300 flex-shrink-0 hover:bg-[rgb(47,73,85)]">
            Search
          </button>
        </div>
      </div>
      <ChatBot />
    </section>
  );
};

export default HeroSection;
