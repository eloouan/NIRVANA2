import {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  Fragment,
} from "react";

import { Link } from "react-router-dom";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
  InfoWindow,
  MarkerProps,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import Places from "./places";
import Distance from "./distance";
import MenuButton from "./menu-button";
import Snowfall from "./snowfall";
import SnowRoof from "./images/snow-roof-long.png";
import cluster from "cluster";
import FilterButton from "./filter-button";
import { off } from "process";
import InfoWindowWithForm from "./infoWindowWithForm";
import axios from "axios";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
type MapProps = {};

const Map: React.FC<MapProps> = () => {
  const [officeMap1, setOfficeMap1] = useState<LatLngLiteral>();
  const [directionsMap1, setDirectionsMap1] = useState<DirectionsResult>();
  const [showMap1, setShowMap1] = useState(true);
  const mapRefMap1 = useRef<GoogleMap>();

  const [officeMap2, setOfficeMap2] = useState<LatLngLiteral>();
  const [directionsMap2, setDirectionsMap2] = useState<DirectionsResult>();
  const mapRefMap2 = useRef<GoogleMap>();

  const addOffice = (
    address: string,
    description: string,
    type: string,
    position: LatLngLiteral
  ) => {
    setOffices((prevOffices) => [
      ...prevOffices,
      { address, description, type, position },
    ]);
  };

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

  const [offices, setOffices] = useState<
    Array<{
      address: string;
      description: string;
      type: string;
      position: LatLngLiteral;
    }>
  >([]);
  const [markers, setMarkers] = useState<MarkerProps[]>([]);
  const [markersLoaded, setMarkersLoaded] = useState(false);

  const createMarker = (type: string = "default") => {
    if (offices.length > 0) {
      const newMarkers = offices.map((office, index) => ({
        position: office.position,
        title: office.address,
        description: office.description,
        type: type,
        key: `office-${index}`, // Use a unique key for each marker
      }));

      setMarkers((prevMarkers) => [...prevMarkers, ...newMarkers]);
    }
  };

  useEffect(() => {
    setMarkersLoaded(true);
  }, []);

  const [selectedMarker, setSelectedMarker] = useState<null | {
    address: string;
    description: string;
    type: string;
    position: { lat: number; lng: number };
  }>(null);

  const [selectedOffice, setSelectedOffice] = useState<null | {
    address: string;
    description: string;
    type: string;
    position: { lat: number; lng: number };
  }>(null);

  const markerIcons = {
    restaurant: "https://cdn-icons-png.flaticon.com/32/3280/3280300.png",
    shopping:
      "https://cdn2.iconfinder.com/data/icons/christmas-filled-outline-1/512/christmas_holiday_merry_xmas_tree_5-32.png",
    entertainment: "https://cdn-icons-png.flaticon.com/32/2503/2503508.png",
    school: "https://cdn-icons-png.flaticon.com/32/2767/2767828.png",
    park: "https://cdn-icons-png.flaticon.com/32/489/489969.png",
    gym: "https://cdn-icons-png.flaticon.com/32/5764/5764179.png",
    transport:
      "https://cdn3.iconfinder.com/data/icons/christmas-filled-7/128/christmas_48-32.png",
  };

  const handleMarkerFilter = (type: string) => {
    const allMarkers = [...offices, ...defaultPoi];
    for (let i = 0; i < allMarkers.length; i++) {
      const marker = allMarkers[i];
      console.log(marker.type, type);

      if (marker.type !== type && marker.position.lat - 45 < 1) {
        marker.position = {
          lat: marker.position.lat + 10,
          lng: marker.position.lng,
        };
      }
      if (marker.type === type) {
        if (marker.position.lat > 46) {
          marker.position = {
            lat: marker.position.lat - 10,
            lng: marker.position.lng,
          };
        }
      }
      console.log(marker.position.lat);
      setSelectedMarker(marker);
    }
  };

  return (
    <div className="container">
      <div className="controls">
        <Places
          setOffice={(address, description, type, position) => {
            showMap1 ? setOfficeMap1(position) : setOfficeMap2(position);
            showMap1
              ? mapRefMap1.current?.panTo(position)
              : mapRefMap2.current?.panTo(position);
            addOffice(address, description, type, position);
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
            <MarkerClusterer>
              {(clusterer) =>
                defaultPoi.map((poi, index) => (
                  <Fragment key={index}>
                    <Marker
                      position={poi.position}
                      title={poi.description}
                      clusterer={clusterer}
                      icon={{ url: markerIcons[poi.type] }}
                      onClick={() => {
                        fetchDirectionsMap1(poi.position);
                        setSelectedMarker(poi);
                      }}
                    />
                    {/* marker customization here */}
                    {selectedMarker === poi && (
                      <InfoWindowWithForm
                        office={poi}
                        onCloseClick={() => setSelectedMarker(null)}
                        onDescriptionChange={(description: string) => {
                          poi.description = description;
                        }}
                      />
                    )}
                  </Fragment>
                ))
              }
            </MarkerClusterer>

            {directionsMap1 && (
              <DirectionsRenderer
                directions={directionsMap1}
                options={{
                  suppressMarkers: true,
                  polylineOptions: {
                    zIndex: 50,
                    strokeColor: "#FF7676",
                    strokeWeight: 5,
                  },
                }}
              />
            )}
            {officeMap1 && (
              <>
                <Marker
                  position={officeMap1}
                  icon="https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png"
                />
              </>
            )}
            {offices.map((office, index) => (
              <Fragment key={`office-marker-${index}`}>
                <Marker
                  position={office.position}
                  title={office.address}
                  icon="https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png"
                  onClick={() => {
                    setSelectedOffice(office);
                    fetchDirectionsMap1(office.position);
                  }}
                />
                {selectedOffice &&
                  selectedOffice.position === office.position && (
                    <InfoWindowWithForm
                      office={office}
                      onCloseClick={() => setSelectedOffice(null)}
                      onDescriptionChange={(description: string) => {
                        office.description = description;
                      }}
                    />
                  )}
              </Fragment>
            ))}
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
                  icon="https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png"
                />
              </>
            )}
            {offices.map((office, index) => (
              <Fragment key={`office-marker-${index}`}>
                <Marker
                  position={office.position}
                  title={office.address}
                  icon="https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png"
                  onClick={() => {
                    setSelectedOffice(office);
                    fetchDirectionsMap2(office.position);
                  }}
                />
                {selectedOffice &&
                  selectedOffice.position === office.position && (
                    <InfoWindow
                      position={office.position}
                      onCloseClick={() => setSelectedOffice(null)}
                    >
                      <div>
                        <h3>{office.address}</h3>

                        {/* Add any additional information you want to display */}
                      </div>
                    </InfoWindow>
                  )}
              </Fragment>
            ))}
          </GoogleMap>
        )}

        <Snowfall></Snowfall>

        <div className="candy-cane"></div>
        <div className="header-snow-roof1"></div>
        <div className="header-snow-roof2"></div>
        <div className="header-snow-roof3"></div>
        <div className="header-snow-roof4"></div>
        <div className="candy-cane"></div>
        <div className="menu-button" style={{ bottom: "20px", right: "10px" }}>
          <div className="wrapper">
            <input type="checkbox" />
            <div className="fab"></div>
            <div className="fac">
              <Link to="/login">
                <button className="login-button"></button>
              </Link>
              <Link to="/admin">
                <button>Admin</button>
              </Link>
            </div>
          </div>
        </div>

        {/*<div className="menu-button" style={{ bottom: "10px", right: "10px" }}>
  <MenuButton />
</div>*/}
        <div className="map-buttons">
          <button className="map1-button" onClick={switchToMap1}></button>
          <button className="map2-button" onClick={switchToMap2}></button>
        </div>
        <button className="recenter-button" onClick={recenterMap}></button>
        <FilterButton
          markerTypes={[
            "restaurant",
            "shopping",
            "entertainment",
            "school",
            "park",
            "gym",
            "transport",
          ]}
          displayTypes={["🍗", "🎁", "🎥", "👨‍🏫", "🌲", "💪", "🚊"]}
          onClick={(type) => handleMarkerFilter(type)}
        />
      </div>
    </div>
  );
};

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

{
  /*
fetch("recup.php")
.then( response => response.json())
.then( data => {
const defaultPoi = data;
console.log(data);
// transformData(data);
})
*/
}

// Base de donnees exemple Chambery
  axios.get("https://l1.dptinfo-usmb.fr/~grp11/Tests/recup2.php")
		    .then(response => {
          response.data.forEach(item => {
            let point_a_add ={
              address: "",
              description: "",
              type: "",
              position: {
                lat: 45.57124197967436,
                lng: 5.919697965999837,
              },
            };
            point_a_add.address=item.address;//// JE DOIS REBUILD UN POINT POUR ENFIN LE ADD DANS LE DEFAULT POI
            point_a_add.description=item.description;
            point_a_add.type=item.type;
            point_a_add.position.lat=parseFloat(item.coordX);
            point_a_add.position.lng=parseFloat(item.coordY);
            defaultPoi = [...defaultPoi, point_a_add];
          });
		    })
let defaultPoi = [
  {
    address: "32 Pl. Monge, 73000 Chambéry",
    description: "Restaurant Carré des Sens - fine dining",
    type: "restaurant",
    position: {
      lat: 45.56324311633563,
      lng: 5.921157303181863,
    },
  },
  {
    address: "1097 Av. des Landiers, 73000 Chambéry",
    description: "Shopping mall Chamnord",
    type: "shopping",
    position: {
      lat: 45.59258489131312,
      lng: 5.899454352402417,
    },
  },
  {
    address: "4 Rue Derrière les Murs, 73000 Chambéry",
    description: "Pathe Movie Theatre",
    type: "entertainment",
    position: {
      lat: 45.56769951499307,
      lng: 5.918508726372975,
    },
  },
  {
    address: "Rue du Lac Majeur, 73370 Le Bourget-du-Lac",
    description: "Universite Bourget du Lac",
    type: "school",
    position: {
      lat: 45.641565952237485,
      lng: 5.87271983174593,
    },
  },
  {
    address: "All. Ouahigouya, 73000 Chambéry",
    description: "Park du Verney",
    type: "park",
    position: {
      lat: 45.56954050075045,
      lng: 5.9174064810826525,
    },
  },
  {
    address: "8 Rue Bonivard, 73000 Chambéry",
    description: "KeepCool gym",
    type: "gym",
    position: {
      lat: 45.566886527715134,
      lng: 5.918076037055356,
    },
  },
  {
    address: "Pl. de la Gare, 73010 Chambéry",
    description: "Train Station Chambery, Challes-les-eaux",
    type: "transport",
    position: {
      lat: 45.57124197967436,
      lng: 5.919697965999837,
    },
  },
];

export default Map;
