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
            <h3 className="text-lg font-semibold mb-4 text-xl">
              Globelink Properties
            </h3>
            <img src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/cropped-Favicon-04-180x180.jpg" />
            {/* <p className="text-sm">
              Globelink Properties is an all-in-one global property consulting
              firm renowned for its expertise in delivering both local and
              international property consulting services.
            </p> */}
            <p className="text-lg">
              Globelink Properties is an all-in-one global property consulting
              firm renowned for its expertise in delivering both local and
              international property consulting services.
            </p>
          </div>
          {/* Column 2: Choose */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-xl">Choose</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a
                  href="/ajman"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Ajman
                </a>
              </li>
              <li>
                <a
                  href="/miami"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Miami
                </a>
              </li>
              <li>
                <a
                  href="/new-york"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> New York
                </a>
              </li>
              <li>
                <a
                  href="/abu-dhabi"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Abu Dhabi
                </a>
              </li>
              <li>
                <a
                  href="/fujairah"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Fujairah
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3: Lifestyle */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-xl">Lifestyle</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a
                  href="/apartment"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Apartment
                </a>
              </li>
              <li>
                <a
                  href="/single-family-home"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Single Family
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/villa"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Villa
                </a>
              </li>
              <li>
                <a
                  href="/loft"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Loft
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-xl">Useful Links</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a
                  href="/amibara-real-estate"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Amibara Real
                  Estate
                </a>
              </li>
              <li>
                <a
                  href="/nahir-properties"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Nahir
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/ovid-real-estate"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Ovid Real
                  Estate
                </a>
              </li>
              <li>
                <a
                  href="/angolala-a"
                  className="text-gray-600 hover:text-primary flex items-center"
                >
                  <span className="mr-2 text-primary">&gt;</span> Angolala A
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">
            © 2025 Globelink Properties. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social Media Icons */}
            <a
              href="https://web.facebook.com/Favethemes/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
              aria-label="Facebook"
            >
              <FiFacebook
                className="text-white hover:text-[rgb(22,116,189)] transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://x.com/favethemes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
              aria-label="Twitter"
            >
              <RiTwitterXFill
                className="text-white hover:text-[rgb(25,37,41)] transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
              aria-label="TikTok"
            >
              <PiTiktokLogo
                className="text-white hover:text-[rgb(143,124,85)] transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
              aria-label="Telegram"
            >
              <RiTelegramLine
                className="text-white hover:text-[rgb(143,124,85)] transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
              aria-label="LinkedIn"
            >
              <SlSocialLinkedin
                className="text-white hover:text-[rgb(11,167,235)] transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
              aria-label="Instagram"
            >
              <FiInstagram
                className="text-white hover:text-[rgb(12,138,223)] transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[rgb(49,76,94)] w-[35px] h-[35px] rounded-full"
              aria-label="YouTube"
            >
              <FiYoutube
                className="text-white hover:text-[rgb(111,36,40)] transition-colors duration-300"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
