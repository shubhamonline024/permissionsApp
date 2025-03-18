import React, { useState } from 'react';

const PermissionsAPI = () => {
    const [data, setData] = useState({});

    const permissions = [
        "accelerometer",
        "accessibility-events",
        "ambient-light-sensor",
        "background-sync",
        "camera",
        "clipboard-read",
        "clipboard-write",
        "geolocation",
        "gyroscope",
        "local-fonts",
        "magnetometer",
        "microphone",
        "midi",
        "notifications",
        "payment-handler",
        "persistent-storage",
        "push",
        "screen-wake-lock",
        "storage-access",
        "top-level-storage-access",
        "window-management",
    ];

    const checkPermissions = () => {
        permissions.forEach((permission) => {
            navigator.permissions.query({ name: permission }).then((result) => {
                setData((prevData) => ({
                    ...prevData,
                    [permission]: result.state, // Store only permission state
                }));
            });
        });
    };

    return (
        <div>
            <button onClick={checkPermissions}>Check Permissions</button>
            <ul>
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default PermissionsAPI;
