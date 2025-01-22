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
            style={{ width: "172px", height: "31px" }} // Custom size for the selector
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
