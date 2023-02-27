import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

function App() {
  const [isInside, setIsInside] = useState(false);

  const handlePolygonClick = () => {
    setIsInside(true);
  };

  const handleMapClick = () => {
    setIsInside(false);
  };

  return (
    <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} onClick={handleMapClick}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polygon
          positions={[
            [51.51, -0.12]
          ]}
          eventHandlers={{ click: handlePolygonClick }}
        />
      </MapContainer>
      {isInside ? (
        <p>You clicked inside the polygon!</p>
      ) : (
        <p>You clicked outside the polygon.</p>
      )}
    </div>
  );
}

export default App;
