import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "1,042", label: "Customers" },
    { number: "22", label: "Cities" },
    { number: "$1.3 B", label: "Yearly Earn" },
    { number: "7", label: "Cool Number" },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-gray-800">{stat.number}</p>
              <p className="text-lg text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
