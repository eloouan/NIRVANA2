import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import Places from "./places";
import Distance from "./distance";
import MenuButton from "./menu-button";
import Snowfall from "./snowfall";
import SnowRoof from "./images/snow-roof-long.png";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
  const [officeMap1, setOfficeMap1] = useState<LatLngLiteral>();
  const [directionsMap1, setDirectionsMap1] = useState<DirectionsResult>();
  const [showMap1, setShowMap1] = useState(true);
  const mapRefMap1 = useRef<GoogleMap>();

  const [officeMap2, setOfficeMap2] = useState<LatLngLiteral>();
  const [directionsMap2, setDirectionsMap2] = useState<DirectionsResult>();
  const mapRefMap2 = useRef<GoogleMap>();

  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 45.566580681555415, lng: 5.920610881510474 }),
    []
  );
  const getMapOptions1 = (bounds: any) => ({
    mapId: "dee71aef6bd0faf4",
    disableDefaultUI: true,
    clickableIcons: false,
    restriction: {
      latLngBounds: bounds,
      strictBounds: true,
    },
  });
  const getMapOptions2 = (bounds: any) => ({
    mapId: "21b1f98b0685a8c2",
    disableDefaultUI: true,
    clickableIcons: false,
    restriction: {
      latLngBounds: bounds,
      strictBounds: true,
    },
  });

  const onLoadMap1 = useCallback((map) => (mapRefMap1.current = map), []);
  const onLoadMap2 = useCallback((map) => (mapRefMap2.current = map), []);

  const houseMap1 = useMemo(() => generateHouses(center, true), [center]);
  const houseMap2 = useMemo(() => generateHouses(center, false), [center]);

  const fetchDirectionsMap1 = (house: LatLngLiteral) => {
    if (!officeMap1) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: house,
        destination: officeMap1,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirectionsMap1(result);
        }
      }
    );
  };

  const fetchDirectionsMap2 = (house: LatLngLiteral) => {
    if (!officeMap2) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: house,
        destination: officeMap2,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirectionsMap2(result);
        }
      }
    );
  };

  const switchToMap1 = () => {
    setShowMap1(true);
  };

  const switchToMap2 = () => {
    setShowMap1(false);
  };

  const recenterMap = () => {
    const currentMap = showMap1 ? mapRefMap1.current : mapRefMap2.current;
    const officePosition = showMap1 ? officeMap1 : officeMap2;

    if (currentMap && officePosition) {
      currentMap.panTo(officePosition);
    }
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [markers, setMarkers] = useState([]);

  const createMarker = (type: string = "default") => {
    const markerType = type; // default marker type
    const newMarker = {
      position: center, // Set the marker's position based on your requirements
      title: "New Marker",
      type: markerType,
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  return (
    <div className="container">
      <div className="controls">
        <Places
          setOffice={(position) => {
            showMap1 ? setOfficeMap1(position) : setOfficeMap2(position);
            showMap1
              ? mapRefMap1.current?.panTo(position)
              : mapRefMap2.current?.panTo(position);
          }}
          createMarker={createMarker}
        />
      </div>

      <div className="map">
        {showMap1 ? (
          <GoogleMap
            key="dee71aef6bd0faf4"
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
            options={getMapOptions1({
              north: 45.7204559777248,
              south: 45.46085230095994,
              west: 5.741038693653954,
              east: 6.073561468829906,
            })}
            onLoad={onLoadMap1}
          >
            {directionsMap1 && (
              <DirectionsRenderer
                directions={directionsMap1}
                options={{
                  polylineOptions: {
                    zIndex: 50,
                    strokeColor: "#396d7c",
                    strokeWeight: 5,
                  },
                }}
              />
            )}
            {officeMap1 && (
              <>
                <Marker
                  position={officeMap1}
                  icon="https://cdn1.iconfinder.com/data/icons/christmas-98/595/Christmas_08-32.png"
                />

                <MarkerClusterer>
                  {(cluster) =>
                    houseMap1.map((house) => (
                      <Marker
                        key={house.lat}
                        position={house}
                        clusterer={cluster}
                        onClick={() => {
                          fetchDirectionsMap1(house);
                        }}
                      />
                    ))
                  }
                </MarkerClusterer>

                <Circle
                  center={officeMap1}
                  radius={1500}
                  options={closeOptions}
                />
                <Circle
                  center={officeMap1}
                  radius={3000}
                  options={middleOptions}
                />
                <Circle
                  center={officeMap1}
                  radius={4500}
                  options={farOptions}
                />
              </>
            )}
          </GoogleMap>
        ) : (
          <GoogleMap
            key="21b1f98b0685a8c2"
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
            options={getMapOptions2({
              north: 45.7204559777248,
              south: 45.46085230095994,
              west: 5.741038693653954,
              east: 6.073561468829906,
            })}
            onLoad={onLoadMap2}
          >
            {directionsMap2 && (
              <DirectionsRenderer
                directions={directionsMap2}
                options={{
                  polylineOptions: {
                    zIndex: 50,
                    strokeColor: "#396d7c",
                    strokeWeight: 5,
                  },
                }}
              />
            )}
            {officeMap2 && (
              <>
                <Marker
                  position={officeMap2}
                  icon="https://cdn1.iconfinder.com/data/icons/christmas-98/595/Christmas_08-32.png"
                />

                <MarkerClusterer>
                  {(cluster) =>
                    houseMap2.map((house) => (
                      <Marker
                        key={house.lat}
                        position={house}
                        clusterer={cluster}
                        onClick={() => {
                          fetchDirectionsMap2(house);
                        }}
                      />
                    ))
                  }
                </MarkerClusterer>

                <Circle
                  center={officeMap2}
                  radius={1500}
                  options={closeOptions}
                />
                <Circle
                  center={officeMap2}
                  radius={3000}
                  options={middleOptions}
                />
                <Circle
                  center={officeMap2}
                  radius={4500}
                  options={farOptions}
                />
              </>
            )}
          </GoogleMap>
        )}

        <div className="candy-cane"></div>
        <div className="header-snow-roof1"></div>
        <div className="header-snow-roof2"></div>
        <div className="header-snow-roof3"></div>
        <div className="header-snow-roof4"></div>
        <div className="candy-cane"></div>
        <div className="menu-button" style={{ bottom: "20px", right: "10px" }}>
          <button onClick={toggleMenu}>Open Menu</button>
        </div>

        {menuVisible && (
          <div className="menu-inside">
            <button className="login-button"></button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        )}

        {/*<div className="menu-button" style={{ bottom: "10px", right: "10px" }}>
          <MenuButton />
        </div>*/}
        <div className="map-buttons">
          <button className="map1-button" onClick={switchToMap1}></button>
          <button className="map2-button" onClick={switchToMap2}></button>
        </div>
        <button className="recenter-button" onClick={recenterMap}></button>
        <Snowfall></Snowfall>
      </div>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

const generateHouses = (position: LatLngLiteral, isMap1: boolean) => {
  const _houses: Array<LatLngLiteral> = [];
  const directionMultiplier = isMap1 ? -1 : 1;

  for (let i = 0; i < 30; i++) {
    const direction = Math.random() < 0.5 ? -38 : 38;
    _houses.push({
      lat: position.lat + (Math.random() / direction) * directionMultiplier,
      lng: position.lng + (Math.random() / direction) * directionMultiplier,
    });
  }

  return _houses;
};
