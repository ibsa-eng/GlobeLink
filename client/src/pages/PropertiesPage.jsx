import React, { useState, useEffect } from "react";
import PropertyList from "../components/PropertyList";
import SearchBar from "../components/SearchBar";
import SidebarForm from "../components/SidebarForm";

const PropertiesPage = () => {
  const [filters, setFilters] = useState({});
  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };

  return (
    <div className="flex gap-4">
      <div className="w-1/4">
        <SidebarForm />
      </div>
      <div className="w-3/4">
        <SearchBar onSearch={handleSearch} />
        <PropertyList filters={filters} />
      </div>
    </div>
  );
};

export default PropertiesPage;
