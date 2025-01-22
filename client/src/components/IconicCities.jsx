import React from "react";

const IconicCities = () => {
  const cities = [
    {
      title: "World Business Center",
      name: "Dubai - UAE",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/istanbul.jpg",
    },
    {
      title: "The Bridge City",
      name: "Istanbul - Turkiye",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/dubai.jpg",
    },
    {
      title: "Capital City of Africa",
      name: "Addis Ababa - Ethiopia",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2024/12/Friendship-Square-2-e1734959887289.jpg", // Replace with the actual image URL
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Leave On World Iconic City
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Top Of Hospitality, Multicultural, Business City In The World
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{city.title}</h3>
              <p className="text-xl font-bold">{city.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconicCities;
