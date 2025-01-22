import React, { useState } from "react";

const SearchSection = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ query, category });
    }
  };

  return (
    <div className="w-full bg-white m-0 p-0">
      {/* Button Group */}
      <div className="flex justify-center w-full m-0 p-0">
        <button
          type="button"
          className={`px-6 py-3 text-center font-semibold ${
            category === "all" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setCategory("all")}
        >
          ALL
        </button>
        <button
          type="button"
          className={`px-6 py-3 text-center font-semibold ${
            category === "buy" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setCategory("buy")}
        >
          BUY
        </button>
        <button
          type="button"
          className={`px-6 py-3 text-center font-semibold ${
            category === "off-plan" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setCategory("off-plan")}
        >
          Off-plan
        </button>
        <button
          type="button"
          className={`px-6 py-3 text-center font-semibold ${
            category === "rent" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setCategory("rent")}
        >
          RENT
        </button>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex w-full border-t border-gray-300 mt-0 p-0"
      >
        {/* Selector Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-r border-gray-300 px-4 py-3 focus:outline-none w-40"
        >
          <option value="all">All Categories</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
          <option value="off-plan">Off-Plan</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search properties..."
          className="flex-grow px-4 py-3 focus:outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
