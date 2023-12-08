// InfoWindowWithForm.tsx

import React, { useState } from "react";
import { InfoWindow } from "@react-google-maps/api";

interface InfoWindowWithFormProps {
  office: {
    address: string;
    description: string;
    type: string;
    position: { lat: number; lng: number };
  };
  onCloseClick: () => void;
  onDescriptionChange: (description: string) => void;
}

const InfoWindowWithForm: React.FC<InfoWindowWithFormProps> = ({
  office,
  onCloseClick,
  onDescriptionChange,
}) => {
  const [formDescription, setFormDescription] = useState(office.description);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onDescriptionChange(formDescription);
    onCloseClick();
  };

  return (
    <InfoWindow position={office.position} onCloseClick={onCloseClick}>
      <div className="info-window-form">
        <h2>{office.address}</h2>
        <p>
          <strong style={{ fontFamily: "Arial" }}>Type of place:</strong>{" "}
          <strong>
            <i>{office.type}</i>
          </strong>
        </p>
        <form onSubmit={handleFormSubmit}>
          <label>
            <strong style={{ fontFamily: "Arial", fontSize: 18 }}>
              {" "}
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 📝✍🏻
            </strong>
            <textarea
              className="custom-textarea"
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
          </label>
          <div className="save-button-container">
            <button className="save-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </InfoWindow>
  );
};

export default InfoWindowWithForm;
