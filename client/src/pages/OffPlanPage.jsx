import React from "react";
import Banner from "../components/Banner";

const OffPlanPage = () => {
  return (
    <div>
      <Banner
        title="Off-Plan Properties"
        subtitle="Invest in the future with pre-construction deals"
        backgroundImage="https://via.placeholder.com/1200x400"
      />
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <p>Discover our selection of off-plan properties.</p>
      </div>
    </div>
  );
};

export default OffPlanPage;
