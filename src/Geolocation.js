import React,{useState} from 'react'

const Geolocation = () => {
    const [data, setData] = useState(null);
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
                  setData({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    altitude: position.coords.altitude,
                    altitudeAccuracy : position.coords.altitudeAccuracy,
                    heading: position.coords.heading,
                    speed: position.coords.speed,
                    type:"Watch Position"
                  });
                },
                (error) => {
                  setError(error.message);
                },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
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
                    setData({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy,
                        altitude: position.coords.altitude,
                        altitudeAccuracy : position.coords.altitudeAccuracy,
                        heading: position.coords.heading,
                        speed: position.coords.speed,
                        type:"Current Position"
                      });
                },
                (error) => {
                    setError(error.message);
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

        {data ? <div>Latitude: {data.latitude}<br/>Longitude: {data.longitude}<br/> Accuracy: {data.accuracy} meters<br/>Altitude: {data.altitude}<br/>Altitude Accuracy: {data.altitudeAccuracy} meters<br/>Heading: {data.heading} degrees<br/>Speed: {data.speed} m/s<br/>Type: {data.type} </div>:error?<p>Error: {error}</p> : <p>Ask for Location</p>}
    </div>
  )
}

export default Geolocation