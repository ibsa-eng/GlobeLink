import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import HomePage from "./pages/HomePage";

import Header from "./components/Header";
import GridSection from "./components/GridSection";
import Footer1 from "./components/Footer1";
import GlobeLinkCard from "./components/GlobeLinkCard";
import StatsSection from "./components/StatsSection";
import DestinationSection from "./components/DestinationSection";
import ServiceSection from "./components/ServiceSection";
import IconicCities from "./components/IconicCities";

const HeroSection = React.lazy(() => import("./components/HeroSection"));
import BlogSection from "./components/BlogSection";
import NewsletterSection from "./components/NewsLetterSection";

const BuyPage = React.lazy(() => import("./pages/BuyPage"));
import PropertyGrid from "./components/PropertyGrid";

const App = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment On The Bay",
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
      category: "APARTMENT",
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-05-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-01-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/new-york-04-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-03-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-08-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
      ],

      category: "VILLA",
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
      category: "APARTMENT",
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
      image: [
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-06-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-3-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-studio-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-2-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bath-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-living-room-1-592x444.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-bed-room-1.jpg",
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/01/inner-pool-1.jpg",
      ],
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
    <I18nextProvider i18n={i18n}>
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

                <DestinationSection />
                <ServiceSection />
                <IconicCities />

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
    </I18nextProvider>
  );
};

export default App;
