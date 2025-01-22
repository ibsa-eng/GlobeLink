// import React from "react";
// import Banner from "../components/Banner";
// import GridSection from "../components/GridSection";

// const BuyPage = () => {
//   const properties = [
//     {
//       image: "https://via.placeholder.com/300",
//       title: "Villa 1",
//       price: "500,000",
//       location: "California",
//     },
//     {
//       image: "https://via.placeholder.com/300",
//       title: "Villa 2",
//       price: "300,000",
//       location: "New York",
//     },
//   ];

//   return (
//     <div>
//       <Banner
//         title="Buy Your Dream Home"
//         subtitle="Explore our properties available for purchase"
//         backgroundImage="https://via.placeholder.com/1200x400"
//       />
//       <div className="max-w-screen-xl mx-auto py-8 px-4">
//         <GridSection properties={properties} />
//       </div>
//     </div>
//   );
// };

// export default BuyPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BuyPage = () => {
//   const [properties, setProperty] = useState(null);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/properties/1").then((response) => {
//       setProperty(response.data);
//     });
//   }, []);

//   return properties ? (
//     <div>
//       <h1>{properties.title}</h1>
//       <p>Price: {properties.price}</p>
//       <p>Location: {properties.location}</p>
//       <p>
//         {properties.beds} Beds, {properties.baths} Baths, {properties.garage}{" "}
//         Garage
//       </p>
//       <p>Size: {properties.size}</p>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );
// };
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BuyPage = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/properties/buy")
//       .then((response) => {
//         setProperties(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching properties:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Buy Properties</h1>
//       <div className="property-list">
//         {properties.map((property) => (
//           <div key={property.id} className="property-card">
//             <img src={property.image} alt={property.title} />
//             <h2>{property.title}</h2>
//             <p>Category: {property.category}</p>
//             <p>Price: {property.price}</p>
//             <p>Beds: {property.beds}</p>
//             <p>Baths: {property.baths}</p>
//             <p>Size: {property.size} sqft</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BuyPage;
// import React, { useEffect, useState } from "react";

// const BuyPage = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/buy")
//       .then((response) => response.json())
//       .then((data) => {
//         setProperties(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching properties:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Buy Properties</h1>
//       <div className="property-list">
//         {properties.map((property) => (
//           <div key={property.id} className="property-card">
//             <img src={property.image} alt={property.title} />
//             <h3>{property.title}</h3>
//             <p>Category: {property.category}</p>
//             <p>Price: {property.price}</p>
//             <p>Beds: {property.beds}</p>
//             <p>Baths: {property.baths}</p>
//             <p>Size: {property.size} sqft</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BuyPage;
// import React, { useEffect, useState } from "react";
// import Card from "../components/Card"; // Import your Card component

// const BuyPage = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/buy")
//       .then((response) => response.json())
//       .then((data) => {
//         setProperties(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching properties:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Buy Properties</h1>
//       <div className="property-list">
//         {/* {properties.map((property) => (
//           <Card
//             key={property.id} // Ensure to use a unique key like property.id
//             image={property.image} // Ensure 'image' exists in your fetched data
//             title={property.title}
//             price={property.price}
//             location={property.location} // Ensure 'location' exists in your data
//             onRentClick={() => console.log("Rent clicked")} // Adjust rent click logic if needed
//             onTitleClick={() => console.log("Title clicked")} // Adjust title click logic if needed
//           />
//         ))} */}
//         {properties.map((property) => (
//           <Card
//             key={property.id}
//             image={property.image}
//             title={property.title}
//             price={property.price}
//             location={property.location}
//             category={property.category} // Ensure 'category' is provided
//             propertyId={property.id} // Ensure each property has a unique ID
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BuyPage;
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const BuyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/buy?page=${page}&query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data.properties);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, [page, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Buy Properties</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search by location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="property-list">
        {properties.map((property) => (
          <Card
            key={property.id}
            image={property.image}
            title={property.title}
            price={property.price}
            location={property.location}
            category={property.category}
            propertyId={property.id}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
