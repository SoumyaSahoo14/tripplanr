import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Hotels from './pages/Hotels';
import ThingsToDo from './pages/ThingsToDo';
import GroupVoting from './pages/GroupVoting';
import Restaurants from './pages/Restaurants';
import Flights from './pages/Flights';
import BookHostels from './pages/BookHostels';
import Reviews from './pages/Reviews';

import TripSelector from './components/TripSelector';
import TripHeader from './components/TripHeader';
import ThemeToggle from './components/ThemeToggle';

import { ThemeProvider } from './context/ThemeContext';
import { SuggestionProvider } from './context/SuggestionContext';

import styles from './App.module.css';
import themeStyles from './styles/themes.module.css';
import AppContentWrapper from './AppContentWrapper';

function App() {
  return (
    <ThemeProvider>
      <AppContentWrapper />
    </ThemeProvider>
  );
}

export default App;
