import React from "react";
import { Link } from "react-router-dom";
const GlobeLinkCard = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 relative">
      <div className="flex bg-white justify-between items-start w-full">
        {/* Logo aligned to the left edge */}
        <img
          src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
          alt="GlobeLink Logo"
          className="h-[195px] w-[300px] object-contain"
        />

        {/* Paragraph aligned to the right edge */}
        <div className="max-w-[600px] bg-white text-right ml-auto">
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "40px",
              lineHeight: "48px",
              letterSpacing: "normal",
              color: "#222222",
            }}
          >
            GlobeLink Properties
          </h2>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "20px",
              letterSpacing: "normal",
              color: "#222222",
              textAlign: "justify", // Ensures justified alignment
            }}
            className="mt-4"
          >
            GlobeLink Properties is an all-in-one global property consulting
            firm renowned for its expertise in delivering both local and
            international property consulting services. In addition, we provide
            exceptional rental and property management, cutting-edge art design,
            and help new real estate companies establish themselves. We are
            fueled by an unwavering dedication to excellence. We prioritize
            customer satisfaction and pride ourselves on seamlessly meeting the
            diverse needs of our valued clients.
          </p>
        </div>
      </div>

      <div className="absolute bg-gray-100 bottom-4 right-4 mt-4">
        <Link
          to="/about-us"
          className="text-blue-500  hover:underline text-sm "
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "20px",
            lineHeight: "20px",
            letterSpacing: "normal",
            color: "#222222",
            // Ensures justified alignment
          }}
        >
          See more
        </Link>
      </div>
    </div>
  );
};
export default GlobeLinkCard;
