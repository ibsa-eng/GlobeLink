// // // import React from "react";
// // // import {
// // //   FaFacebookF,
// // //   FaTwitter,
// // //   FaInstagram,
// // //   FaLinkedinIn,
// // //   FaYoutube,
// // // } from "react-icons/fa";

// // // const Home = () => {
// // //   return (
// // //     <div>
// // //       {/* Top Bar */}
// // //       <div className="bg-primary text-white text-sm">
// // //         <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 px-4">
// // //           {/* Social Icons */}
// // //           <div className="flex items-center space-x-3">
// // //             <FaFacebookF className="hover:text-gray-300" />
// // //             <FaTwitter className="hover:text-gray-300" />
// // //             <FaInstagram className="hover:text-gray-300" />
// // //             <FaLinkedinIn className="hover:text-gray-300" />
// // //             <FaYoutube className="hover:text-gray-300" />
// // //           </div>

// // //           {/* Language Selector */}
// // //           <div>
// // //             <select className="bg-white text-black py-1 px-2 rounded-md text-sm">
// // //               <option value="English">English</option>
// // //               <option value="Arabic">Arabic</option>
// // //             </select>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Navigation */}
// // //       <div className="bg-white shadow-md">
// // //         <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4">
// // //           {/* Logo */}
// // //           <img
// // //             src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
// // //             alt="Globelink Logo"
// // //             className="h-10"
// // //           />

// // //           {/* Nav Links */}
// // //           <nav className="flex space-x-6 text-primary font-medium">
// // //             <a href="#" className="hover:text-gray-500">
// // //               HOME
// // //             </a>
// // //             <a href="#" className="hover:text-gray-500">
// // //               BUY
// // //             </a>
// // //             <a href="#" className="hover:text-gray-500">
// // //               OFF-PLAN
// // //             </a>
// // //             <a href="#" className="hover:text-gray-500">
// // //               RENT
// // //             </a>
// // //             <a href="#" className="hover:text-gray-500">
// // //               MEDIA
// // //             </a>
// // //             <a href="#" className="hover:text-gray-500">
// // //               CONTACT
// // //             </a>
// // //           </nav>
// // //         </div>
// // //       </div>

// // //       {/* Hero Section */}
// // //       <div
// // //         className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-center text-white"
// // //         style={{
// // //           backgroundImage: `url('https://dev.globelinkproperties.com/wp-content/uploads/2022/11/Banner-1.jpg')`,
// // //         }}
// // //       >
// // //         <div>
// // //           <h1 className="text-5xl font-bold">Globally Yours</h1>
// // //           <p className="text-lg mt-4">CHOOSE YOUR REALITY DREAM</p>
// // //         </div>
// // //       </div>

// // //       {/* Search Bar */}
// // //       <div className="bg-white shadow-md -mt-16 relative z-10">
// // //         <div className="max-w-screen-xl mx-auto flex items-center space-x-4 py-4 px-4">
// // //           {/* Tabs */}
// // //           <div className="flex space-x-4">
// // //             <button className="px-6 py-2 bg-gray-200 text-black rounded-md">
// // //               All
// // //             </button>
// // //             <button className="px-6 py-2 bg-primary text-white rounded-md">
// // //               Buy
// // //             </button>
// // //             <button className="px-6 py-2 bg-gray-200 text-black rounded-md">
// // //               Off-Plan
// // //             </button>
// // //             <button className="px-6 py-2 bg-gray-200 text-black rounded-md">
// // //               Rent
// // //             </button>
// // //           </div>

// // //           {/* Search Fields */}
// // //           <div className="flex-grow flex items-center space-x-4">
// // //             <select className="border px-4 py-2 rounded-md">
// // //               <option>All World</option>
// // //               <option>Africa</option>
// // //               <option>Asia</option>
// // //             </select>
// // //             <input
// // //               type="text"
// // //               placeholder="Enter keyword..."
// // //               className="border px-4 py-2 rounded-md w-full"
// // //             />
// // //             <button className="bg-accent text-black px-6 py-2 rounded-md">
// // //               Search
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import React from "react";
// // import Banner from "../components/Banner";
// // import GridSection from "../components/GridSection";
// // import SearchBar from "../components/SearchBar";

// // const HomePage = () => {
// //   const featuredProperties = [
// //     {
// //       image: "https://via.placeholder.com/300",
// //       title: "Luxury Villa",
// //       price: "500,000",
// //       location: "California, USA",
// //     },
// //     {
// //       image: "https://via.placeholder.com/300",
// //       title: "Modern Apartment",
// //       price: "300,000",
// //       location: "New York, USA",
// //     },
// //   ];

// //   return (
// //     <div>
// //       {/* Banner with dynamic title, subtitle, and background image */}
// //       <Banner
// //         title="Globally Yours"
// //         subtitle="CHOOSE YOUR REALITY DREAM"
// //         backgroundImage="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg"
// //       />

// //       {/* SearchBar for filtering or searching properties */}
// //       <SearchBar />

// //       {/* Featured Properties Section (no background image here) */}
// //       <div className="max-w-screen-xl mx-auto py-8 px-4">
// //         <h2 className="text-2xl font-bold mb-4">Featured Properties</h2>
// //         <GridSection properties={featuredProperties} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;

// // import React from "react";

// // const HomePage = () => {
// //   return (
// //     <div className="text-center text-white py-32">
// //       <h1 className="text-5xl font-bold mb-4">
// //         Welcome to Globelink Properties
// //       </h1>
// //       <p className="text-xl">
// //         Discover your dream property with the best real estate services.
// //       </p>
// //     </div>
// //   );
// // };

// // export default HomePage;
// import React from "react";
// import Banner from "../components/Banner";
// import GridSection from "../components/GridSection";
// import SearchBar from "../components/SearchBar";
// import GlobeLinkCard from "../components/GlobeLinkCard";

// const HomePage = () => {
//   const properties = [
//     {
//       id: 1,
//       title: "Modern Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$1,900/mo",
//       type: "RENT",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 2,
//       title: "Luxury Villa With Pool",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Villa",
//       price: "990,000 AED",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 3,
//       title: "Ample Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$245,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 1,
//       title: "Modern Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$1,900/mo",
//       type: "RENT",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 2,
//       title: "Luxury Villa With Pool",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Villa",
//       price: "990,000 AED",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 3,
//       title: "Ample Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$245,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 1,
//       title: "Modern Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$1,900/mo",
//       type: "RENT",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 2,
//       title: "Luxury Villa With Pool",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Villa",
//       price: "990,000 AED",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 3,
//       title: "Ample Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$245,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 1,
//       title: "Modern Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$1,900/mo",
//       type: "RENT",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 2,
//       title: "Luxury Villa With Pool",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Villa",
//       price: "990,000 AED",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 3,
//       title: "Ample Apartment",
//       image:
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       category: "Apartment",
//       price: "$245,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     // const featuredProperties = [
//     //   {
//     //     image: "https://via.placeholder.com/300",
//     //     title: "Luxury Villa",
//     //     price: "500,000",
//     //     location: "California, USA",
//     //   },
//     //   {
//     //     image: "https://via.placeholder.com/300",
//     //     title: "Modern Apartment",
//     //     price: "300,000",
//     //     location: "New York, USA",
//     //   },
//   ];

//   return (

//       {/* Banner with background image */}
//       <div>
//         <Banner
//           title="Globally Yours"
//           subtitle="CHOOSE YOUR REALITY DREAM"
//           backgroundImage="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg"
//         />

//         <SearchBar />

//       <GridSection properties={properties} sectionTitle="Featured Properties" />

//     </div>
//   );
// };

// export default HomePage;
import React from "react";
import Banner from "../components/Banner";
import GridSection from "../components/GridSection";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  // const properties = [
  //   {
  //     id: 1,
  //     title: "Modern Apartment",
  //     image:
  //       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
  //     category: "Apartment",
  //     price: "$1,900/mo",
  //     type: "RENT",
  //     beds: 4,
  //     baths: 2,
  //     garages: 1,
  //     size: 1200,
  //   },
  //   {
  //     id: 2,
  //     title: "Luxury Villa With Pool",
  //     image:
  //       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
  //     category: "Villa",
  //     price: "990,000 AED",
  //     type: "BUY",
  //     beds: 4,
  //     baths: 2,
  //     garages: 2,
  //     size: 1200,
  //   },
  //   {
  //     id: 3,
  //     title: "Ample Apartment",
  //     image:
  //       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
  //     category: "Apartment",
  //     price: "$245,000",
  //     type: "BUY",
  //     beds: 4,
  //     baths: 2,
  //     garages: 1,
  //     size: 1200,
  //   },
  //];

  return (
    <div>
      {/* Banner with background image */}
      <Banner
        title="Globally Yours"
        subtitle="CHOOSE YOUR REALITY DREAM"
        backgroundImage="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg"
      />
      {/* Search bar */}
      <SearchBar />
    </div>
  );
};

export default HomePage;
