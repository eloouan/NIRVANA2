import { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

type PlacesProps = {
  setOffice: (position: google.maps.LatLngLiteral) => void;
  createMarker: (type: string) => void;
};

export default function Places({ setOffice, createMarker }: PlacesProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [markerType, setMarkerType] = useState<string>("default");
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [showMarkerInput, setShowMarkerInput] = useState(false);

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();
    setIsOptionSelected(true); // Set to true when an option is selected

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setOffice({ lat, lng });

    // Show the marker type input bar
    setShowMarkerInput(true);
  };

  const handleMarkerTypeSelect = (selected: string) => {
    setMarkerType(selected);

    // Use the createMarker function to add the marker to the map
    createMarker(selected);
  };

  const isAddressEntered = value.trim() !== "";

  return (
    <div>
      <Combobox onSelect={handleSelect}>
        {/* Address input */}
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setIsOptionSelected(false); // Reset to false when the user types
            setShowMarkerInput(false); // Hide the marker input if the user types
          }}
          disabled={!ready}
          className="combobox-input input-field"
          placeholder="What's the place's address?"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

      {/* Marker type input (conditionally rendered) */}
      {showMarkerInput && (
        <Combobox
          aria-labelledby="marker-type-label"
          onSelect={handleMarkerTypeSelect}
        >
          <ComboboxInput
            value={markerType}
            onChange={(e) => setMarkerType(e.target.value)}
            disabled={!ready}
            className="combobox-input input-field"
            placeholder="What type of place is this?"
            id="marker-type-label"
          />
          <ComboboxPopover>
            <ComboboxList>
              <ComboboxOption value="home" />
              <ComboboxOption value="work" />
              <ComboboxOption value="restaurant" />
              <ComboboxOption value="shop" />
              <ComboboxOption value="park" />
              {/* Add more marker types as needed */}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      )}
    </div>
  );
}
