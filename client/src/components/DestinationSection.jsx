// // import React, { useState, useEffect } from "react";

// // const DestinationSection = () => {
// //   // State to hold the background and right-side images
// //   const [bgImage, setBgImage] = useState(
// //     "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg"
// //   ); // Initial background image
// //   const [rightImage, setRightImage] = useState(
// //     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg"
// //   ); // Initial right-side image

// //   useEffect(() => {
// //     // Array of background images to cycle through
// //     const bgImages = [
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-05-592x444.jpg",
// //     ];

// //     // Array of right-side images to cycle through
// //     const rightImages = [
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul2-e1734937825583.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Addis_Ababa_Lion_Statue_FCS.jpg",
// //       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/nature-istanbul-turkey-city-wallpaper-preview.jpg",
// //     ];

// //     // Change the background image every 5 seconds
// //     const bgInterval = setInterval(() => {
// //       const randomBgIndex = Math.floor(Math.random() * bgImages.length);
// //       setBgImage(bgImages[randomBgIndex]); // Update background image
// //     }, 5000);

// //     // Change the right-side image every 5 seconds
// //     const rightInterval = setInterval(() => {
// //       const randomRightIndex = Math.floor(Math.random() * rightImages.length);
// //       setRightImage(rightImages[randomRightIndex]); // Update right-side image
// //     }, 5000);

// //     // Clean up the intervals when the component is unmounted
// //     return () => {
// //       clearInterval(bgInterval);
// //       clearInterval(rightInterval);
// //     };
// //   }, []);

// //   return (
// //     <section className="bg-white py-10">
// //       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //         {/* Left Side: Text and Button */}
// //         <div className="bg-teal-800 text-white p-8 rounded-lg">
// //           <h2 className="text-4xl font-bold mb-4">CHOOSE YOUR DESTINATION</h2>
// //           <p className="text-lg mb-6">
// //             You Can Choose Next Home, Dubai - UAE, Istanbul - Turkiye, Addis
// //             Ababa - Ethiopia
// //           </p>
// //           <button className="bg-white text-teal-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-200">
// //             Discover
// //           </button>
// //         </div>

// //         {/* Right Side: Image */}
// //         <div>
// //           <img
// //             src={rightImage} // Dynamically changing right-side image
// //             alt="Destination"
// //             className="rounded-lg shadow-md"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default DestinationSection;
// import React, { useState, useEffect } from "react";

// const DestinationSection = () => {
//   // State to hold the background and right-side images
//   const [bgImage, setBgImage] = useState("https://via.placeholder.com/800x600"); // Initial background image
//   const [rightImage, setRightImage] = useState(
//     "https://via.placeholder.com/800x600"
//   ); // Initial right-side image

//   useEffect(() => {
//     // Array of background images to cycle through
//     const bgImages = [
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-05-592x444.jpg",
//     ];

//     // Array of right-side images to cycle through
//     const rightImages = [
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul2-e1734937825583.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Addis_Ababa_Lion_Statue_FCS.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/nature-istanbul-turkey-city-wallpaper-preview.jpg",
//     ];

//     // Change the background image every 5 seconds
//     const bgInterval = setInterval(() => {
//       const randomBgIndex = Math.floor(Math.random() * bgImages.length);
//       setBgImage(bgImages[randomBgIndex]); // Update background image
//     }, 5000);

//     // Change the right-side image every 5 seconds
//     const rightInterval = setInterval(() => {
//       const randomRightIndex = Math.floor(Math.random() * rightImages.length);
//       setRightImage(rightImages[randomRightIndex]); // Update right-side image
//     }, 5000);

//     // Clean up the intervals when the component is unmounted
//     return () => {
//       clearInterval(bgInterval);
//       clearInterval(rightInterval);
//     };
//   }, []);

//   return (
//     <section
//       className="bg-white py-10"
//       style={{
//         backgroundImage: `url(${bgImage})`, // Apply the background image
//         backgroundSize: "cover", // Ensure the background image covers the entire section
//         backgroundPosition: "center", // Center the background image
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left Side: Text and Button */}
//         <div className="bg-teal-800 text-white p-8 rounded-lg">
//           <h2 className="text-4xl font-bold mb-4">CHOOSE YOUR DESTINATION</h2>
//           <p className="text-lg mb-6">
//             You Can Choose Next Home, Dubai - UAE, Istanbul - Turkiye, Addis
//             Ababa - Ethiopia
//           </p>
//           <button className="bg-white text-teal-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-200">
//             Discover
//           </button>
//         </div>

//         {/* Right Side: Image */}
//         <div>
//           <img
//             src={rightImage} // Dynamically changing right-side image
//             alt="Destination"
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DestinationSection;
// import React, { useState, useEffect } from "react";

// const DestinationSection = () => {
//   // State to hold the background and right-side images
//   const [bgImage, setBgImage] = useState(
//     "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg"
//   ); // Initial background image
//   const [rightImage, setRightImage] = useState(
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg"
//   ); // Initial right-side image

//   // State to control the rendering of the Home section
//   const [showHome, setShowHome] = useState(false);

//   useEffect(() => {
//     // Array of background images to cycle through
//     const bgImages = [
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-05-592x444.jpg",
//     ];

//     // Array of right-side images to cycle through
//     const rightImages = [
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul2-e1734937825583.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Addis_Ababa_Lion_Statue_FCS.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/nature-istanbul-turkey-city-wallpaper-preview.jpg",
//     ];

//     // Change the background image every 5 seconds
//     const bgInterval = setInterval(() => {
//       const randomBgIndex = Math.floor(Math.random() * bgImages.length);
//       setBgImage(bgImages[randomBgIndex]); // Update background image
//     }, 5000);

//     // Change the right-side image every 5 seconds
//     const rightInterval = setInterval(() => {
//       const randomRightIndex = Math.floor(Math.random() * rightImages.length);
//       setRightImage(rightImages[randomRightIndex]); // Update right-side image
//     }, 5000);

//     // Clean up the intervals when the component is unmounted
//     return () => {
//       clearInterval(bgInterval);
//       clearInterval(rightInterval);
//     };
//   }, []);

//   // Function to handle the button click to show Home
//   const handleDiscoverClick = () => {
//     setShowHome(true);
//   };

//   return (
//     <section
//       className="bg-white py-10"
//       style={{
//         backgroundImage: `url(${bgImage})`, // Apply the background image
//         backgroundSize: "cover", // Ensure the background image covers the entire section
//         backgroundPosition: "center", // Center the background image
//       }}
//     >
//       {!showHome ? (
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
//           {/* Left Side: Text and Button with fixed size */}
//           <div
//             className="bg-teal-800 text-white p-8 rounded-lg"
//             style={{
//               width: "244px", // Set width to 244px
//               height: "337px", // Set height to 337px
//             }}
//           >
//             <h2 className="text-4xl font-bold mb-4">CHOOSE YOUR DESTINATION</h2>
//             <p className="text-lg mb-6">
//               You Can Choose Next Home, Dubai - UAE, Istanbul - Turkiye, Addis
//               Ababa - Ethiopia
//             </p>
//             <button
//               onClick={handleDiscoverClick}
//               className="bg-white text-teal-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-200"
//             >
//               Discover
//             </button>
//           </div>

//           {/* Right Side: Image */}
//           <div>
//             <img
//               src={rightImage} // Dynamically changing right-side image
//               alt="Destination"
//               className="rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//       ) : (
//         // Home section rendered after the button is clicked
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Welcome Home!</h1>
//           <p className="text-lg mb-6">Enjoy your new destination.</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default DestinationSection;
// import React, { useState, useEffect } from "react";

// const DestinationSection = () => {
//   // State to hold the background and right-side images
//   const [bgImage, setBgImage] = useState(
//     "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg"
//   ); // Initial background image
//   const [rightImage, setRightImage] = useState(
//     "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg"
//   ); // Initial right-side image

//   // State to control the rendering of the Home section
//   const [showHome, setShowHome] = useState(false);

//   useEffect(() => {
//     // Array of background images to cycle through
//     const bgImages = [
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-05-592x444.jpg",
//     ];

//     // Array of right-side images to cycle through
//     const rightImages = [
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul2-e1734937825583.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Addis_Ababa_Lion_Statue_FCS.jpg",
//       "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/nature-istanbul-turkey-city-wallpaper-preview.jpg",
//     ];

//     // Change the background image every 5 seconds
//     const bgInterval = setInterval(() => {
//       const randomBgIndex = Math.floor(Math.random() * bgImages.length);
//       setBgImage(bgImages[randomBgIndex]); // Update background image
//     }, 5000);

//     // Change the right-side image every 5 seconds
//     const rightInterval = setInterval(() => {
//       const randomRightIndex = Math.floor(Math.random() * rightImages.length);
//       setRightImage(rightImages[randomRightIndex]); // Update right-side image
//     }, 5000);

//     // Clean up the intervals when the component is unmounted
//     return () => {
//       clearInterval(bgInterval);
//       clearInterval(rightInterval);
//     };
//   }, []);

//   // Function to handle the button click to show Home
//   const handleDiscoverClick = () => {
//     setShowHome(true);
//   };

//   return (
//     <section
//       className="bg-white py-10"
//       style={{
//         backgroundImage: `url(${bgImage})`, // Apply the background image
//         backgroundSize: "cover", // Ensure the background image covers the entire section
//         backgroundPosition: "center", // Center the background image
//       }}
//     >
//       {!showHome ? (
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
//           {/* Left Side: Text and Button */}
//           <div
//             className="bg-teal-800 text-white p-8 rounded-lg flex flex-col justify-between"
//             style={{
//               width: "244px", // Fixed width
//               height: "337px", // Fixed height
//             }}
//           >
//             <div>
//               <h2 className="text-4xl font-bold mb-4">
//                 CHOOSE YOUR DESTINATION
//               </h2>
//               <p className="text-lg mb-6">
//                 You Can Choose Next Home, Dubai - UAE, Istanbul - Turkiye, Addis
//                 Ababa - Ethiopia
//               </p>
//             </div>
//             <button
//               onClick={handleDiscoverClick}
//               className="bg-white text-teal-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 self-start"
//             >
//               Discover
//             </button>
//           </div>

//           {/* Right Side: Image */}
//           <div>
//             <img
//               src={rightImage} // Dynamically changing right-side image
//               alt="Destination"
//               className="rounded-lg shadow-md w-full h-full object-cover"
//               style={{
//                 height: "337px", // Match height with left box
//               }}
//             />
//           </div>
//         </div>
//       ) : (
//         // Home section rendered after the button is clicked
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4">Welcome Home!</h1>
//           <p className="text-lg mb-6">Enjoy your new destination.</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default DestinationSection;
import React, { useState, useEffect } from "react";

const DestinationSection = () => {
  // State to hold the background and right-side images
  const [bgImage, setBgImage] = useState(
    "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg"
  ); // Initial background image
  const [rightImage, setRightImage] = useState(
    "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg"
  ); // Initial right-side image

  // State to control the rendering of the Home section
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    // Array of background images to cycle through
    const bgImages = [
      "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-05-592x444.jpg",
    ];

    // Array of right-side images to cycle through
    const rightImages = [
      "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul2-e1734937825583.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Addis_Ababa_Lion_Statue_FCS.jpg",
      "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/nature-istanbul-turkey-city-wallpaper-preview.jpg",
    ];

    // Change the background image every 5 seconds
    const bgInterval = setInterval(() => {
      const randomBgIndex = Math.floor(Math.random() * bgImages.length);
      setBgImage(bgImages[randomBgIndex]); // Update background image
    }, 5000);

    // Change the right-side image every 5 seconds
    const rightInterval = setInterval(() => {
      const randomRightIndex = Math.floor(Math.random() * rightImages.length);
      setRightImage(rightImages[randomRightIndex]); // Update right-side image
    }, 5000);

    // Clean up the intervals when the component is unmounted
    return () => {
      clearInterval(bgInterval);
      clearInterval(rightInterval);
    };
  }, []);

  // Function to handle the button click to show Home
  const handleDiscoverClick = () => {
    setShowHome(true);
  };

  return (
    <section
      className="bg-white py-10 min-h-screen" // Ensure full height
      style={{
        backgroundImage: `url(${bgImage})`, // Apply the background image
        backgroundSize: "cover", // Ensure the background image covers the entire section
        backgroundPosition: "center", // Center the background image
      }}
    >
      {!showHome ? (
        <div className="max-w-6xl mx-auto px-4 flex items-stretch h-full">
          {/* Left Side: Text and Button */}
          <div
            className="bg-teal-800 text-white p-8 rounded-lg flex-shrink-0"
            style={{
              width: "236px", // Set fixed width for the left box
              height: "462px", // Set fixed height for the left box
            }}
          >
            <h2 className="text-4xl font-bold mb-4">CHOOSE YOUR DESTINATION</h2>
            <p className="text-lg mb-6">
              You Can Choose Next Home, Dubai - UAE, Istanbul - Turkiye, Addis
              Ababa - Ethiopia
            </p>
            <button
              onClick={handleDiscoverClick}
              className="bg-white text-teal-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-200"
            >
              Discover
            </button>
          </div>

          {/* Right Side: Image */}
          <div
            className="flex-grow"
            style={{
              width: "820px", // Set fixed width for the right image container
              height: "462px", // Set fixed height for the right image container
            }}
          >
            <img
              src={rightImage} // Dynamically changing right-side image
              alt="Destination"
              className="rounded-lg shadow-md object-cover w-full h-full" // Ensure the image covers the container
              style={{
                objectFit: "cover", // Ensures the image maintains aspect ratio and fills the container
                width: "100%", // Ensure image fills the width of the container
                height: "100%", // Ensure image fills the height of the container
              }}
            />
          </div>
        </div>
      ) : (
        // Home section rendered after the button is clicked
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Home!</h1>
          <p className="text-lg mb-6">Enjoy your new destination.</p>
        </div>
      )}
    </section>
  );
};

export default DestinationSection;
