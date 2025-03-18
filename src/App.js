import React from 'react'
import Geolocation from './components/Geolocation'
import PermissionsAPI from './components/PermissionsAPI'
import Notification from './components/Notification';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {

  return (
    <div>
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/geolocation-api">Geolocation API</Link>
        <Link to="/notification-api">Notification API</Link>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<PermissionsAPI/>}/>
          <Route path="/geolocation-api" element={<Geolocation/>}/>
          <Route path="/notification-api" element={<Notification/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App