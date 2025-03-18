import React,{useState} from 'react'

const Notification = () => {
    const [permission, setPermission] = useState(Notification.permission);

    const requestPermission = () => {
        Notification.requestPermission().then((perm) => {
          setPermission(perm);
        });
      };

    const showNotification = () =>{
        if (permission === "granted") {
            new Notification("Hello!", {
              body: "This is a simple notification.",
              icon: "https://cdn-icons-png.flaticon.com/512/1827/1827348.png"
            });
        }
    }
  return (
    <div>
        {permission !== "granted" ? (
            <button onClick={requestPermission}>Request Permission</button>
          ) : (
            <button onClick={showNotification}>Show Notification</button>
          )}
    </div>
  )
}

export default Notification