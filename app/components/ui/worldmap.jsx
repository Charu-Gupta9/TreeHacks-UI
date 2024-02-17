// // pages/WorldMap.jsx
// "use client"
// import React, { useState, useEffect } from 'react';

// const WorldMap = () => {
//   const [markerLocations, setMarkerLocations] = useState([]);

//   const markerData = [
//     { lat: 37.7749, lng: -122.4194, name: 'San Francisco', info: 'Golden Gate Bridge, Silicon Valley' },
//     { lat: 51.5074, lng: -0.1278, name: 'London', info: 'Big Ben, Buckingham Palace' },
//     { lat: 40.7128, lng: -74.0060, name: 'New York City', info: 'Statue of Liberty, Times Square' },
//     // ... more markers
//   ];
//   useEffect(() => {
//     setMarkerLocations(markerData);
//   }, []); // Load marker data once on component mount

//   return (
//       <div>
//       <img src="app/components/ui/mapImage.jpg" width="1500" height="600" />
//       </div>
//   );
// };

// export { WorldMap };
