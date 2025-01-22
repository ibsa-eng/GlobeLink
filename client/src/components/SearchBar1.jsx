import React, { useState } from "react";

const SearchBar1 = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const handleSearch = () => {
    onSearch({ keyword, city, area });
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Enter Keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border rounded p-2"
      />
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Cities</option>
        <option value="City1">City1</option>
        <option value="City2">City2</option>
      </select>
      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Areas</option>
        <option value="Area1">Area1</option>
        <option value="Area2">Area2</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar1;
