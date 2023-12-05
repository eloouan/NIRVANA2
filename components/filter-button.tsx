import React, { useState } from "react";

interface FilterButtonProps {
  markerTypes: string[];
  onFilter: (type: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  markerTypes,
  onFilter,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleFilter = (type: string) => {
    onFilter(type);
    toggleMenu();
  };

  return (
    <div className="filter-button">
      <button onClick={toggleMenu}>Filter Markers</button>
      {showMenu && (
        <div className="filter-menu">
          {markerTypes.map((type, index) => (
            <button key={index} onClick={() => handleFilter(type)}>
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
