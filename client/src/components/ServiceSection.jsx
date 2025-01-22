// import React from "react";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: "👥", // Replace with an appropriate icon
//       title: "Property Management",
//       description:
//         "Encompass a wide range of tasks designed to maintain and enhance the value of real estate assets while ensuring tenant satisfaction.",
//     },
//     {
//       icon: "🔄", // Replace with an appropriate icon
//       title: "Capital Improvements",
//       description:
//         "To substantial investments in a property to enhance its overall value, extend its lifespan, or adapt it to new uses.",
//     },
//     {
//       icon: "📈", // Replace with an appropriate icon
//       title: "Financial Reporting",
//       description:
//         "To help clients understand and manage their financial health through accurate and insightful reports.",
//     },
//     {
//       icon: "🤝", // Replace with an appropriate icon
//       title: "Business Development",
//       description:
//         "Companies identify and pursue growth opportunities to expand their operations and market presence.",
//     },
//     {
//       icon: "🏢", // Replace with an appropriate icon
//       title: "Finance Real Estate",
//       description:
//         "To help clients navigate the complexities of securing funding and managing investments in real estate.",
//     },
//     {
//       icon: "⚖️", // Replace with an appropriate icon
//       title: "Recover Asset Value",
//       description:
//         "Clients maximize the value of their existing assets and recover any potential losses through effective strategies.",
//     },
//   ];

//   return (
//     <section className="bg-white py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow"
//             >
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: "👥", // Replace with an appropriate icon
      title: "Property Management",
      description:
        "Encompass a wide range of tasks designed to maintain and enhance the value of real estate assets while ensuring tenant satisfaction.",
    },
    {
      icon: "🔄", // Replace with an appropriate icon
      title: "Capital Improvements",
      description:
        "To substantial investments in a property to enhance its overall value, extend its lifespan, or adapt it to new uses.",
    },
    {
      icon: "📈", // Replace with an appropriate icon
      title: "Financial Reporting",
      description:
        "To help clients understand and manage their financial health through accurate and insightful reports.",
    },
    {
      icon: "🤝", // Replace with an appropriate icon
      title: "Business Development",
      description:
        "Companies identify and pursue growth opportunities to expand their operations and market presence.",
    },
    {
      icon: "🏢", // Replace with an appropriate icon
      title: "Finance Real Estate",
      description:
        "To help clients navigate the complexities of securing funding and managing investments in real estate.",
    },
    {
      icon: "⚖️", // Replace with an appropriate icon
      title: "Recover Asset Value",
      description:
        "Clients maximize the value of their existing assets and recover any potential losses through effective strategies.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-left mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-6 shadow-sm hover:shadow-lg transition-shadow" // Removed the border class
            >
              <div className="text-4xl mr-6">
                {" "}
                {/* Spacing between icon and text */}
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
