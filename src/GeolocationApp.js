import { useState, useEffect } from "react";

export default function GeolocationApp() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
      
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">User Location</h1>
        {location ? (
          <p className="text-lg">
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <p>Fetching location...</p>
        )}
      </div>
    </div>
  );
}
