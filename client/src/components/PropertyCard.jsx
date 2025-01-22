import React from "react";

// const PropertyCard = ({ property }) => {
//   return (
//     <div className="border p-4 rounded">
//       <img
//         src={property.image}
//         alt={property.name}
//         className="w-full h-52 object-cover"
//       />
//       <h3 className="text-lg font-bold">{property.name}</h3>
//       <p>${property.price.toLocaleString()}</p>
//       <p>{property.location}</p>
//     </div>
//   );
// };
const PropertyCard = ({ property }) => {
  return (
    <div className="relative border p-4 rounded">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-52 object-cover"
      />
      <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">
        {property.type}
      </div>
      <h3 className="text-lg font-bold">{property.name}</h3>
      <p>${property.price.toLocaleString()}</p>
      <p>{property.location}</p>
    </div>
  );
};

export default PropertyCard;
