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
  setOffice: (
    position: google.maps.LatLngLiteral,
    name: string,
    type: string
  ) => void;
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
  const [typeValue, setTypeValue] = useState<string>("default");

  const handleMarkerTypeSelect = (selected: string) => {
    setMarkerType(selected);
    setTypeValue(selected); // Store the selected type
    createMarker(selected);
    setIsOptionSelected(true);
  };

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    const name = val;
    const type = typeValue; // Access the stored type
    setOffice({ lat, lng }, name, type);

    setShowMarkerInput(true);
  };

  return (
    <div>
      <Combobox onSelect={handleMarkerTypeSelect}>
        <ComboboxInput
          value={typeValue}
          onChange={(e) => {
            setTypeValue(e.target.value);
            setIsOptionSelected(false);
            setShowMarkerInput(false);
          }}
          disabled={!ready}
          className="combobox-input input-field"
          placeholder="What type of place is this?"
        />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption value="home" />
            <ComboboxOption value="work" />
            <ComboboxOption value="restaurant" />
            <ComboboxOption value="shop" />
            <ComboboxOption value="park" />
            {/* Add more options as needed */}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      {isOptionSelected && (
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setShowMarkerInput(false);
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
      )}
    </div>
  );
}
