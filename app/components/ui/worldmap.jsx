// pages/WorldMap.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for styling

const WorldMap = () => {
  const [markerLocations, setMarkerLocations] = useState([]);

  const markerData = [
    { lat: 37.7749, lng: -122.4194, name: 'San Francisco', info: 'Golden Gate Bridge, Silicon Valley' },
    { lat: 51.5074, lng: -0.1278, name: 'London', info: 'Big Ben, Buckingham Palace' },
    { lat: 40.7128, lng: -74.0060, name: 'New York City', info: 'Statue of Liberty, Times Square' },
    // ... more markers
  ];
  useEffect(() => {
    setMarkerLocations(markerData);
  }, []); // Load marker data once on component mount

  return (
    <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.mapbox.com/about/">Mapbox</a> &copy; <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        accessToken="YOUR_MAPBOX_ACCESS_TOKEN" // Replace with your Mapbox access token
      />
      {markerLocations.map((marker) => (
        <Marker key={marker.name} position={[marker.lat, marker.lng]}>
          <Popup>
            <h2>{marker.name}</h2>
            <p>{marker.info}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export { WorldMap };
