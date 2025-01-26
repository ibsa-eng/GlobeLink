// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import i18n from "./i18n";
// import HomePage from "./pages/HomePage";

// import Header from "./components/Header";
// import GridSection from "./components/GridSection";
// import Footer1 from "./components/Footer1";
// import GlobeLinkCard from "./components/GlobeLinkCard";
// import StatsSection from "./components/StatsSection";
// import DestinationSection from "./components/DestinationSection";
// import ServiceSection from "./components/ServiceSection";
// import IconicCities from "./components/IconicCities";

// const HeroSection = React.lazy(() => import("./components/HeroSection"));
// import BlogSection from "./components/BlogSection";
// import NewsletterSection from "./components/NewsLetterSection";

// const BuyPage = React.lazy(() => import("./pages/BuyPage"));
// import PropertyGrid from "./components/PropertyGrid";

// const App = () => {
//   const properties = [
//     {
//       id: 1,
//       title: "Modern Apartment On The Bay",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "APARTMENT",
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
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-01-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-04-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-03-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-08-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//       ],

//       category: "VILLA",
//       price: "990,000 AED",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 3,
//       title: "Ample Apartment At Last Floor",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "APARTMENT",
//       price: "$245,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 4,
//       title: "Penthouse Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "9000/mo",
//       type: "RENT",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 5,
//       title: "Luxury Apartment Bay View",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Villa",
//       price: "$987,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 6,
//       title: "Design Place Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$967,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 7,
//       title: "Comfortable and Ample Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$1,600/mo",
//       type: "RENT",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 8,
//       title: "Pent House Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Villa",
//       price: "$876,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 9,
//       title: "Relaxing Apartment Bay View",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$2,800/mo",
//       type: "Rent",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 10,
//       title: "Renovated Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$540,000",
//       type: "Buy",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 11,
//       title: "Cotemporary Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$3,600/month",
//       type: "Rent",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 12,
//       title: "Generated Modern Home",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$590,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 13,
//       title: "Modern Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$1,900/mo",
//       type: "RENT",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//     {
//       id: 14,
//       title: "Luxury Villa With Pool",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Villa",
//       price: "990,000 AED",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 2,
//       size: 1200,
//     },
//     {
//       id: 15,
//       title: "Ample Apartment",
//       image: [
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
//         "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
//       ],
//       category: "Apartment",
//       price: "$245,000",
//       type: "BUY",
//       beds: 4,
//       baths: 2,
//       garages: 1,
//       size: 1200,
//     },
//   ];
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}></Suspense>
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <GridSection
//                 properties={properties}
//                 sectionTitle="Featured Properties"
//               />
//               <GlobeLinkCard />

//               <DestinationSection />
//               <ServiceSection />
//               <IconicCities />

//               <NewsletterSection />
//               <BlogSection />
//             </>
//           }
//         />
//         {/* <Route path="/buy" element={<BuyPage />} /> */}
//         <Route path="/buy" element={<BuyPage />} />
//       </Routes>
//       <Footer1 />
//       <Suspense />
//     </Router>
//   );
// };

// export default App;
import React, { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiTiktokLogo } from "react-icons/pi";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Header = () => {
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <header className="bg-[rgb(4,73,85)] text-white w-full py-2">
      <div
        className="flex justify-between items-center mx-auto max-w-[1232px] px-4"
        style={{ height: "35px" }}
      >
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* Facebook */}
          <a
            href="https://web.facebook.com/Favethemes/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(49,76,94)] w-[25px] h-[25px] rounded-full"
            aria-label="Facebook"
          >
            <FiFacebook
              className="text-white hover:text-[rgb(22,116,189)] transition-colors duration-300"
              size={20}
            />
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/favethemes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(49,76,94)] w-[25px] h-[25px] rounded-full"
            aria-label="Twitter"
          >
            <RiTwitterXFill
              className="text-white hover:text-[rgb(25,37,41)] transition-colors duration-300"
              size={20}
            />
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(49,76,94)] w-[25px] h-[25px] rounded-full"
            aria-label="TikTok"
          >
            <PiTiktokLogo
              className="text-white hover:text-[rgb(143,124,85)] transition-colors duration-300"
              size={20}
            />
          </a>
          {/* Telegram */}
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(49,76,94)] w-[25px] h-[25px] rounded-full"
            aria-label="Telegram"
          >
            <RiTelegramLine
              className="text-white hover:text-[rgb(143,124,85)] transition-colors duration-300"
              size={20}
            />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(49,76,94)] w-[25px] h-[25px] rounded-full"
            aria-label="LinkedIn"
          >
            <SlSocialLinkedin
              className="text-white hover:text-[rgb(11,167,235)] transition-colors duration-300"
              size={20}
            />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(49,76,94)] w-[25px] h-[25px] rounded-full"
            aria-label="Instagram"
          >
            <FiInstagram
              className="text-white hover:text-[rgb(12,138,223)] transition-colors duration-300"
              size={20}
            />
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[rgb(49,76,94)] w-[25px] h-[25px] rounded-full"
            aria-label="YouTube"
          >
            <FiYoutube
              className="text-white hover:text-[rgb(111,36,40)] transition-colors duration-300"
              size={20}
            />
          </a>
        </div>

        {/* Language Selector */}
        <div>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-white text-black border-none py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ width: "172px", height: "31px" }}
            aria-label="Language Selector"
          >
            <option value="" disabled>
              Select Language
            </option>
            <option value="am">Amharic</option>
            <option value="zh">Chinese (Simplified)</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
