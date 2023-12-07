import React, { useState } from "react";

interface FilterButtonProps {
  markerTypes: string[];
  onClick: (type: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  markerTypes,
  onClick,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleFilter = (type: string) => {
    onClick(type);
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