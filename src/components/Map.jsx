import { useEffect } from "react";
import React from "react";

export default function Map() {
  useEffect(() => {
    if (window.google) {
      const location = { 
        lat: 28.6404, // 28°38'25.5"N
        lng: 77.4192  // 77°25'09.2"E
      };

      // Dark map style
      const darkStyle = [
        { elementType: "geometry", stylers: [{ color: "#212121" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#282828" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#383838" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#000000" }],
        }
      ];

      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: location,
        styles: darkStyle,
        disableDefaultUI: false, // enables all default controls
        zoomControl: true,       // ensures zoom buttons show
        streetViewControl: false, // pegman
        fullscreenControl: false, // fullscreen toggle
        mapTypeControl: false,   // hides map/satellite toggle if you don't need it
      });
      

      // Custom marker
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "My Location",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Replace with your own icon if desired
          scaledSize: new window.google.maps.Size(40, 40),
        },
        animation: window.google.maps.Animation.DROP,
      });
    }
  }, []);

  return (
    <div
      id="map"
      className="h-60 w-120 rounded-2xl overflow-hidden shadow-lg border border-white/20"
    ></div>
  );
}
