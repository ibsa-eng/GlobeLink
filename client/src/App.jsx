// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import BuyPage from "./pages/BuyPage";
// import OffPlanPage from "./pages/OffPlanPage";
// import ContactPage from "./pages/ContactPage";
// import Header from "./components/Header";
// import NavBar from "./components/NavBar";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/buy" element={<BuyPage />} />
//         <Route path="/off-plan" element={<OffPlanPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import Header from "./components/Header";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <div
//         className="bg-cover bg-center min-h-screen"
//         style={{
//           backgroundImage: `url('https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg')`, // Replace with actual background image URL
//         }}
//       >
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           {/* Add other pages */}
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";

// import HomePage from "./pages/HomePage";
// import Header from "./components/Header";
// import GridSection from "./components/GridSection";
// import Footer1 from "./components/Footer1";

// const App = () => {
//   const featuredProperties = [
//     {
//       image: "image1.jpg",
//       title: "Beautiful House",
//       price: "$500,000",
//       location: "New York, NY",
//     },
//     {
//       image: "image2.jpg",
//       title: "Modern Apartment",
//       price: "$300,000",
//       location: "Los Angeles, CA",
//     },
//     {
//       image: "image3.jpg",
//       title: "Cozy Cottage",
//       price: "$200,000",
//       location: "Chicago, IL",
//     },
//     {
//       image: "image4.jpg",
//       title: "Luxury Villa",
//       price: "$1,000,000",
//       location: "Miami, FL",
//     },
//   ];

//   return (
//     <Router>
//       <Header />
//       <div
//         className="bg-cover bg-center min-h-screen"
//         style={{
//           backgroundImage: `url('https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg')`,
//         }}
//       >
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           {/* Add other pages */}
//         </Routes>
//         {/* Place GridSection below Routes */}
//       </div>
//       <GridSection
//         properties={featuredProperties}
//         sectionTitle="Featured Properties"
//       />
//       <Footer1 />
//     </Router>
//   );
// };

// export default App;
// Parent component or App.js
// Parent component or App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import i18n from "./i18n";
import HomePage from "./pages/HomePage";
//import PropertiesPage from "./pages/PropertiesPage";
import Header from "./components/Header";
import GridSection from "./components/GridSection";
import Footer1 from "./components/Footer1";
import GlobeLinkCard from "./components/GlobeLinkCard";
import StatsSection from "./components/StatsSection";
import DestinationSection from "./components/DestinationSection";
import ServiceSection from "./components/ServiceSection";
import IconicCities from "./components/IconicCities";
// import HeroSection from "./components/HeroSection";
// import Buy from "./pages/Buy";
const HeroSection = React.lazy(() => import("./components/HeroSection"));
import BlogSection from "./components/BlogSection";
import NewsletterSection from "./components/NewsLetterSection";
// import BuyPage from "./pages/BuyPage";
const BuyPage = React.lazy(() => import("./pages/BuyPage"));
import PropertyGrid from "./components/PropertyGrid";

const App = () => {
  // const featuredProperties = [
  //   {
  //     image: "image1.jpg",
  //     title: "Beautiful House",
  //     description: "A stunning property with modern amenities.",
  //     price: "$500,000",
  //     apartmentType: "Apartment",
  //     beds: 3,
  //     showers: 2,
  //     size: 120,
  //   },
  //   {
  //     image: "image2.jpg",
  //     title: "Modern Apartment",
  //     description: "Located in the heart of the city.",
  //     price: "$300,000",
  //     apartmentType: "Studio",
  //     beds: 1,
  //     showers: 1,
  //     size: 80,
  //   },
  //   {
  //     image: "image3.jpg",
  //     title: "Cozy Cottage",
  //     description: "Perfect for a small family.",
  //     price: "$200,000",
  //     apartmentType: "Cottage",
  //     beds: 2,
  //     showers: 1,
  //     size: 100,
  //   },
  // ];

  // const featuredProperties = [
  //   {
  //     image: "image1.jpg",
  //     title: "Beautiful House",
  //     price: "$500,000",
  //     location: "New York, NY",
  //   },
  //   {
  //     image: "image2.jpg",
  //     title: "Modern Apartment",
  //     price: "$300,000",
  //     location: "Los Angeles, CA",
  //   },
  //   {
  //     image: "image3.jpg",
  //     title: "Cozy Cottage",
  //     price: "$200,000",
  //     location: "Chicago, IL",
  //   },
  //   {
  //     image: "image4.jpg",
  //     title: "Luxury Villa",
  //     price: "$1,000,000",
  //     location: "Miami, FL",
  //   },
  // ];
  const properties = [
    {
      id: 1,
      title: "Modern Apartment On The Bay",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
      category: "Apartment",
      price: "$1,900/mo",
      type: "RENT",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 2,
      title: "Luxury Villa With Pool",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
      category: "Villa",
      price: "990,000 AED",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 2,
      size: 1200,
    },
    {
      id: 3,
      title: "Ample Apartment At Last Floor",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
      category: "Apartment",
      price: "$245,000",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 4,
      title: "Penthouse Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-01-592x444.jpg",
      category: "Apartment",
      price: "9000/mo",
      type: "RENT",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 5,
      title: "Luxury Apartment Bay View",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-03-592x444.jpg",
      category: "Villa",
      price: "$987,000",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 2,
      size: 1200,
    },
    {
      id: 6,
      title: "Design Place Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-10-592x444.jpg",
      category: "Apartment",
      price: "$967,000",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 7,
      title: "Comfortable and Ample Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-09-592x444.jpg",
      category: "Apartment",
      price: "$1,600/mo",
      type: "RENT",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 8,
      title: "Pent House Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-08-592x444.jpg",
      category: "Villa",
      price: "$876,000",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 2,
      size: 1200,
    },
    {
      id: 9,
      title: "Relaxing Apartment Bay View",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-07-592x444.jpg",
      category: "Apartment",
      price: "$2,800/mo",
      type: "Rent",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 10,
      title: "Renovated Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-04-592x444.jpg",
      category: "Apartment",
      price: "$540,000",
      type: "Buy",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 11,
      title: "Cotemporary Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-03-592x444.jpg",
      category: "Apartment",
      price: "$3,600/month",
      type: "Rent",
      beds: 4,
      baths: 2,
      garages: 2,
      size: 1200,
    },
    {
      id: 12,
      title: "Generated Modern Home",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/02/house-5-592x444.jpg",
      category: "Apartment",
      price: "$590,000",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 13,
      title: "Modern Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
      category: "Apartment",
      price: "$1,900/mo",
      type: "RENT",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
    {
      id: 14,
      title: "Luxury Villa With Pool",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
      category: "Villa",
      price: "990,000 AED",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 2,
      size: 1200,
    },
    {
      id: 15,
      title: "Ample Apartment",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-04-592x444.jpg",
      category: "Apartment",
      price: "$245,000",
      type: "BUY",
      beds: 4,
      baths: 2,
      garages: 1,
      size: 1200,
    },
  ];
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <GridSection
                properties={properties}
                sectionTitle="Featured Properties"
              />
              <GlobeLinkCard />
              <StatsSection />
              <DestinationSection />
              <ServiceSection />
              <IconicCities />
              <PropertyGrid />
              <NewsletterSection />
              <BlogSection />
            </>
          }
        />
        {/* <Route path="/buy" element={<BuyPage />} /> */}
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
      <Footer1 />
      <Suspense />
    </Router>
  );
};

export default App;
//  <Header />
//       <div
//         className="bg-cover bg-center min-h-screen"
//         style={{
//           backgroundImage: `url('https://dev.globelinkproperties.com/wp-content/uploads/2024/12/palm.jpg')`,
//         }}
//       >
//         {/* <HeroSection /> */}
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/buy" element={<BuyPage />} />
//           {/* Add other routes for additional pages */}
//         </Routes>

//         {/* Place GridSection inside the Route for the home page */}
//       </div>
//       <GridSection properties={properties} sectionTitle="Featured Properties" />
//       <GlobeLinkCard />
//       <StatsSection />
//       <DestinationSection />
//       <ServiceSection />
//       <IconicCities />
//       <PropertyGrid />
//       <NewsletterSection />
//       <BlogSection />
//       <Footer1 />
