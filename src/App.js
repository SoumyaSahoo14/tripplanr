import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import { SuggestionProvider } from './context/SuggestionContext';
import styles from './App.module.css';
import TripSelector from "./components/TripSelector";
import TripHeader from './components/TripHeader.jsx';

function App() {
  const [tripCode, setTripCode] = useState(null);

  useEffect(() => {
    const savedTrip = localStorage.getItem("activeTripCode");
    if (savedTrip) {
      setTripCode(savedTrip);
    }
  }, []);


  useEffect(() => {
    if (tripCode) {
      localStorage.setItem("activeTripCode", tripCode);
    }
  }, [tripCode]);

  const handleTripSwitch = () => {
    localStorage.removeItem("activeTripCode");
    setTripCode(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TripPlanr 🧳</h1>
      {!tripCode ? (
        <TripSelector onTripSelected={setTripCode} />
      ) : (
        <SuggestionProvider tripCode={tripCode}>
          <TripHeader tripCode={tripCode} onTripSwitch={handleTripSwitch} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </SuggestionProvider>
      )}

    </div>

  );
}

export default App;
