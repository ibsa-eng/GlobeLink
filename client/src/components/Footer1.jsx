import React from "react";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiTiktokLogo } from "react-icons/pi";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Footer1 = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Upper Footer */}
      <div
        className="py-10 border-b border-gray-300"
        style={{ backgroundColor: "rgb(211,162,85)" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div
              style={{ backgroundColor: "rgb(211,162,85)" }}
              className="p-4 rounded-lg"
            >
              <img
                src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
                className="filter invert brightness-0"
                alt="Globelink Properties Logo"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "25px",
                  letterSpacing: "1px",
                  color: "#FFFFFF",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "300",
                fontSize: "20px",
                lineHeight: "25px",
                letterSpacing: "normal",
                color: "#FFFFFF",
              }}
              className="text-lg"
            >
              Globelink Properties is an all-in-one global property consulting
              firm renowned for its expertise in delivering both local and
              international property consulting services.
            </p>
          </div>
          {/* Column 2: Choose */}
          <div>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "40px",
                letterSpacing: "normal",
                color: "#FFFFFF",
              }}
              className="text-lg  mb-8"
            >
              Choose
            </h3>
            <ul
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "40px",
                letterSpacing: "normal",
                color: "#FFFFFF",
              }}
              className="text-lg  mb-8 space-y-2"
            >
              <li>
                <a
                  href="/ajman"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Ajman
                </a>
              </li>
              <li>
                <a
                  href="/miami"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Miami
                </a>
              </li>
              <li>
                <a
                  href="/new-york"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> New York
                </a>
              </li>
              <li>
                <a
                  href="/abu-dhabi"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                    hover: "#222222",
                  }}
                  className="text-lg  mb-8 space-y-2 hover:text-blue-700"
                >
                  <span className="mr-2 text-primary">&gt;</span> Abu Dhabi
                </a>
              </li>
              <li>
                <a
                  href="/fujairah"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Fujairah
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3: Lifestyle */}
          <div>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "40px",
                letterSpacing: "normal",
                color: "#FFFFFF",
              }}
              className="text-lg  mb-8"
            >
              Lifestyle
            </h3>
            <ul>
              <li>
                <a
                  href="/apartment"
                  // className="text-gray-600 hover:text-primary flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Apartment
                </a>
              </li>
              <li>
                <a
                  href="/single-family-home"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 hover:text-blue-700">&gt;</span> Single
                  Family Home
                </a>
              </li>
              <li>
                <a
                  href="/villa"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Villa
                </a>
              </li>
              <li>
                <a
                  href="/loft"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Loft
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4: Useful Links */}
          <div>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "40px",
                letterSpacing: "normal",
                color: "#FFFFFF",
              }}
              className="text-lg  mb-8"
            >
              Useful Links
            </h3>
            <ul
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "40px",
                letterSpacing: "normal",
                color: "#FFFFFF",
              }}
              className="text-lg  mb-8 space-y-2"
            >
              <li>
                <a
                  href="/amibara-real-estate"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Amibara Real
                  Estate
                </a>
              </li>
              <li>
                <a
                  href="/nahir-properties"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Nahir
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/ovid-real-estate"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Ovid Real
                  Estate
                </a>
              </li>
              <li>
                <a
                  href="/angolala-a"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "40px",
                    letterSpacing: "normal",
                    color: "#FFFFFF",
                  }}
                  className="text-lg  mb-8 space-y-2"
                >
                  <span className="mr-2 text-primary">&gt;</span> Angolala A
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-800 text-gray-400 py-16">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">
            © 2025 Globelink Properties. All rights reserved.
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Footer1;
// {/* <div className="flex space-x-6">
//   {/* Social Media Icons */}
//   <a
//     href="https://web.facebook.com/Favethemes/?_rdc=1&_rdr"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
//     aria-label="Facebook"
//   >
//     <FiFacebook
//       className="text-white hover:text-[rgb(22,116,189)] transition-colors duration-300"
//       size={16}
//     />
//   </a>
//   <a
//     href="https://x.com/favethemes"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
//     aria-label="Twitter"
//   >
//     <RiTwitterXFill
//       className="text-white hover:text-[rgb(25,37,41)] transition-colors duration-300"
//       size={16}
//     />
//   </a>
//   <a
//     href="https://www.tiktok.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
//     aria-label="TikTok"
//   >
//     <PiTiktokLogo
//       className="text-white hover:text-[rgb(143,124,85)] transition-colors duration-300"
//       size={16}
//     />
//   </a>
//   <a
//     href="https://telegram.org/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
//     aria-label="Telegram"
//   >
//     <RiTelegramLine
//       className="text-white hover:text-[rgb(143,124,85)] transition-colors duration-300"
//       size={16}
//     />
//   </a>
//   <a
//     href="https://www.linkedin.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
//     aria-label="LinkedIn"
//   >
//     <SlSocialLinkedin
//       className="text-white hover:text-[rgb(11,167,235)] transition-colors duration-300"
//       size={16}
//     />
//   </a>
//   <a
//     href="https://www.instagram.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
//     aria-label="Instagram"
//   >
//     <FiInstagram
//       className="text-white hover:text-[rgb(12,138,223)] transition-colors duration-300"
//       size={16}
//     />
//   </a>
//   <a
//     href="https://www.youtube.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
//     aria-label="YouTube"
//   >
//     <FiYoutube
//       className="text-white hover:text-[rgb(111,36,40)] transition-colors duration-300"
//       size={16}
//     />
//   </a>
// </div>; */}
