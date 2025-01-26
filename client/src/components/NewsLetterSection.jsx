import React from "react";
import video from "../assets/Download.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faWhatsapp,
  faTiktok,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
const NewsletterSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-0 space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Side - Newsletter and Social Media */}
        <div className="flex-1">
          <h2 className="text-2xl  mb-10">NEWSLETTER SIGN UP</h2>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              fontSize: "30px",
              lineHeight: "36px",
              letterSpacing: "normal",
              color: "#000000",
            }}
            className="flex items-center space-x-4 mb-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "30px",
                letterSpacing: "normal",
                color: "#000000",
              }}
              className="w-full lg:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "30px",
                letterSpacing: "normal",
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Submit
            </button>
          </div>

          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              fontSize: "30px",
              lineHeight: "36px",
              letterSpacing: "normal",
              color: "#000000",
            }}
            className="text-xl  mb-4"
          >
            Follow Us On Social Media
          </h3>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Facebook */}
            <a
              href="#"
              className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="bg-blue-400 p-3 rounded-full text-white hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="bg-red-600 p-3 rounded-full text-white hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            {/* WhatsApp */}
            <a
              href="#"
              className="bg-green-500 p-3 rounded-full text-white hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            {/* TikTok */}
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full text-white hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            {/* Telegram */}
            <a
              href="#"
              className="bg-blue-500 p-3 rounded-full text-white hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>

        {/* Right Side - Phone Frame with Video */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://dev.globelinkproperties.com/wp-content/uploads/elementor/thumbs/PhoneCase2-qyrztedprfg75ngfvtijqfuuo5846aadqxicj2takg.png" // Replace with phone frame image
              alt="Phone Frame"
              className="w-64"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <video
                src={video}
                className="w-11/12 h-11/12 rounded-md"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700 transition">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
