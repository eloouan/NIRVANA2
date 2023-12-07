import React, { useState } from "react";

interface FilterButtonProps {
  markerTypes: string[];
  onClick: (type: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  markerTypes,
  onClick,
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleFilter = (type: string) => {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
    onClick(type);
  };

  return (
    <div className="filter-menu">
      {markerTypes.map((type, index) => (
        <div key={index} className="filter-item">
          <label className="filter-label">
            <input
              type="checkbox"
              checked={selectedType === type}
              onChange={() => handleFilter(type)}
            />
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterButton;
