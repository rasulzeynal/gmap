import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  const [map, setMap] = useState(null);
  const [polygon, setPolygon] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCty2878MPtPmz8tQDhN9TJZaUDndAnDL0",
      version: "weekly",
      libraries: ["geometry", "places"],
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.37187861700456, lng: 49.84984665559048 },
        zoom: 13,
      });

      setMap(map);

      // Add a polygon to the map
      const polygonCoords = [
        { lat: 40.37187861700456, lng: 49.84984665559048 },
        { lat: 40.373094724461154, lng: 49.8443560512584},
        { lat: 40.37657446729986, lng: 49.84160014887952},
        { lat: 40.38438488205612, lng: 49.84256368066333},
        { lat: 40.385286353044336, lng: 49.854004020444734 },
        { lat: 40.37812048124083, lng: 49.86429122252933 },
        
      ];

      const polygon = new window.google.maps.Polygon({
        paths: polygonCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#B5F1CC",
        fillOpacity: 0.35,
      });

      polygon.setMap(map);
      setPolygon(polygon);

      const geocoder = new window.google.maps.Geocoder();

      // Add a click event listener to the polygon
      polygon.addListener("click", (event) => {
          geocoder.geocode({ location: event.latLng }, (results, status) => {
            if (status === "OK") {
              if (results[0]) {
                console.log(results[0].formatted_address);
              } else {
                console.log("No results found");
              }
            } else {
              console.log("Geocoder failed due to: " + status);
            }
          });
      });

      // Add a click event listener to the map
      map.addListener("click", (event) => {
        
          console.log("Qeyd etdiyiniz əraziyə xidmət etmirik");
      });
    });
  }, []);

  return (
    <>
    <div id="map" style={{ height: "800px", width: "100%" }}>
      {/* Map container */}
    </div>
    </>
    
  );
}

export default Map;
