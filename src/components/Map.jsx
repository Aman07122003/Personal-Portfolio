import { useEffect } from "react";
import React from "react";

export default function Map() {
  useEffect(() => {
    // Make sure Google Maps API is loaded
    if (window.google) {
      const location = { lat: 28.6129, lng: 77.2295 }; // Example: India Gate

      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
      });

      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "My Location",
      });
    }
  }, []);

  return (
    <div
      id="map"
      className="h-[400px] w-[600px] rounded-lg overflow-hidden"
    ></div>
  );
}
