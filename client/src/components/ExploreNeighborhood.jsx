import React from "react";

const ExploreNeighborhood = () => {
  const properties = [
    {
      id: 1,
      title: "Abu Dhabi",
      count: "6 Properties",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-1-592x444.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Apartment",
      count: "30 Properties",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-1-592x444.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Ajman",
      count: "17 Properties",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/chicago-1-592x444.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore The Neighborhood
        </h2>
        <p className="mt-2 text-gray-600">
          There Are Different Property Options To Choose From, Each Serving A
          Purpose To Help You Build A Finished Site.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <p className="text-sm">{property.count}</p>
              <h3 className="text-lg font-bold">{property.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreNeighborhood;
