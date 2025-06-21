import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeContext } from './context/ThemeContext';
import { SuggestionProvider } from './context/SuggestionContext';

import NavBar from './components/NavBar';
import TripSelector from './components/TripSelector';
import TripHeader from './components/TripHeader';
import ThemeToggle from './components/ThemeToggle';

import Home from './pages/Home';
import Discover from './pages/Discover';
import Hotels from './pages/Hotels';
import ThingsToDo from './pages/ThingsToDo';
import GroupVoting from './pages/GroupVoting';
import Restaurants from './pages/Restaurants';
import Flights from './pages/Flights';
import BookHostels from './pages/BookHostels';
import Reviews from './pages/Reviews';

import styles from './App.module.css';
import themeStyles from './styles/themes.module.css';

const AppContentWrapper = () => {
  const { theme } = useContext(ThemeContext);
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
    <div className={`${themeStyles[theme]} ${styles.container}`}>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <>
            <ThemeToggle/>
            <div style={{padding:"2rem",textAlign:"center"}}>
              <h1>Welcome to TripPlanr</h1>
              <p>Select a feature from Menu to get Started.</p>
            </div>
            </>
          }
        />
        <Route path="/discover" element={<Discover />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/groupvote" element={<GroupVoting />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/book-hostels" element={<BookHostels />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default AppContentWrapper;
