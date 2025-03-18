import React,{useState} from 'react'

const Geolocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [watchId,setWatchId] = useState(null);

    const askWatchPermission = ()=>{
        if(watchId){
            navigator.geolocation.clearWatch(watchId);
            setWatchId(null);
        }
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
              
            setWatchId(watchId)
        }else {
            setError("Geolocation is not supported by this browser.");
        }
    }
    const askCurrentPermission = () =>{
        if(watchId){
            navigator.geolocation.clearWatch(watchId);
            setWatchId(null);
        }
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                  console.log("Latitude:", position.coords.latitude);
                  console.log("Longitude:", position.coords.longitude);
                },
                (error) => {
                  console.error("Error getting location:", error.message);
                },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        }
        else{
            setError("Geolocation is not supported by this browser.");
        }
        
    }
  return (
    <div>
        <button onClick={askWatchPermission}>Ask Watch Permission</button>
        <button onClick={askCurrentPermission}>Ask Current Permission</button>

        {location ? <p>Latitude: {location.latitude}, Longitude:{location.longitude}</p>:error?<p>Error: {error}</p> : <p>Ask for Location</p>}
    </div>
  )
}

export default Geolocation