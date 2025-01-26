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
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            fontSize: "40px",
            lineHeight: "48px",
            letterSpacing: "normal",
            color: "#000000",
          }}
          className="text-3xl text-left mb-10"
        >
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
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "28px",
                    letterSpacing: "normal",
                    color: "#222222",
                  }}
                  className="text-xl font-semibold  mb-2"
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",

                    fontSize: "21px",
                    lineHeight: "22px",
                    letterSpacing: "normal",
                    color: "#7A7A7A",
                  }}
                  className="text-gray-600"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
