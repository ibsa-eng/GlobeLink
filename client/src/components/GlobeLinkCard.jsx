import React from "react";
import { Link } from "react-router-dom";

const GlobeLinkCard = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 relative">
      <div className="flex items-center space-x-6">
        {" "}
        {/* Increased spacing between logo and text */}
        <img
          src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-05-1.png"
          alt="GlobeLink Logo"
          className="h-[195px] w-[300px] object-contain"
        />
        <div className="flex flex-col justify-start">
          {" "}
          {/* Wrap the title and description in a flex column */}
          <h2 className="text-2xl font-bold text-gray-800">
            GlobeLink Properties
          </h2>
          {/* Description */}
          <p className="mt-4 text-gray-600 leading-7">
            GlobeLink Properties is an all-in-one global property consulting
            firm that is renowned for its expertise in delivering both local and
            international property consulting services. In addition, we provide
            exceptional rental and property management, cutting-edge art design,
            and help new real estate companies establish themselves. We are
            fueled by an unwavering dedication to excellence. We prioritize
            customer satisfaction and pride ourselves on seamlessly meeting the
            diverse needs of our valued clients.
          </p>
        </div>
      </div>

      {/* See More Link */}
      <div className="absolute bottom-4 right-4">
        <Link
          to="/about-us"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default GlobeLinkCard;
