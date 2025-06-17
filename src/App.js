import React, { useState, useEffect,useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import { SuggestionProvider } from './context/SuggestionContext';
import styles from './App.module.css';
import TripSelector from "./components/TripSelector";
import TripHeader from './components/TripHeader.jsx';
import { ThemeProvider,ThemeContext } from './context/ThemeContext.jsx';
import themeStyles from './styles/themes.module.css';
import ThemeToggle from'./components/ThemeToggle.jsx';


function AppContent() {
  const [tripCode, setTripCode] = useState(null);
  const {theme} = useContext(ThemeContext);

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
      <div className={`${themeStyles[theme]} ${styles.container}`}>
        <ThemeToggle/>
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

function App(){
  return(
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  );
}

export default App;
