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
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: "90px",
            letterSpacing: "normal",
            color: "#222222",
          }}
          className="w-[300px] h-[70px] object-contain"
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
