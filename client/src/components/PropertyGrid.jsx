import React from "react";

const PropertyCard = ({ properties, name, image }) => {
  return (
    <div
      className="relative w-full h-72 bg-cover bg-center rounded-lg shadow-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
      <div className="absolute bottom-5 left-5 z-10 text-white">
        <h4 className="text-lg font-semibold">{properties} Properties</h4>
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>
    </div>
  );
};

const PropertyGrid = () => {
  const properties = [
    {
      name: "Single Family Home",
      properties: 11,
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
    },
    {
      name: "Sharjah",
      properties: 0,
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
    },
    {
      name: "Villa",
      properties: 10,
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
    },
    {
      name: "Furjairah",
      properties: 2,
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
    },
    {
      name: "Abu Dhabi",
      properties: 6,
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
    },
    {
      name: "Apartment",
      properties: 30,
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
    },
    {
      name: "Ajman",
      properties: 17,
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/addisbaba.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
