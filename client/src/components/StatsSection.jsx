import React, { useState, useEffect } from "react";

const StatsSection = () => {
  const stats = [
    { number: 1042, label: "Customers" },
    { number: 22, label: "Cities" },
    { number: 1300000000, label: "Yearly Earn" }, // In numbers for simplicity
    { number: 7, label: "Cool Number" },
  ];

  const [count, setCount] = useState(0); // State for the count
  const targetNumber = 1042; // The target value you want to count up to

  useEffect(() => {
    // Only run the counter effect for the "Customers" stat
    if (count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < targetNumber) {
            return prevCount + 1;
          } else {
            clearInterval(interval); // Stop the interval once the target is reached
            return targetNumber;
          }
        });
      }, 1); // Adjust the interval time (in ms) for how fast the counter increments
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [count]);

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-gray-800">
                {stat.number === 1042 ? count : stat.number.toLocaleString()}
              </p>
              <p className="text-lg text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
